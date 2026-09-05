import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

// Render real components in both languages, without a browser or new dependencies.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: i18n } = await server.ssrLoadModule('/src/i18n.js')
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const { projects } = await server.ssrLoadModule('/src/data/projects.js')
  const { socials } = await server.ssrLoadModule('/src/data/socials.js')
  const base = '/portafolio/'
  let count = 0
  for (const language of ['es', 'en']) {
    await i18n.changeLanguage(language)
    for (const chapter of ['top', 'projects', 'homelab', 'experience', 'contact']) {
      globalThis.window = { location: { hash: `#${chapter}` } }
      const html = renderToStaticMarkup(createElement(App))
      delete globalThis.window
      assert.ok(html.includes('Javier Maroto'), `${language}/${chapter}: owner is visible`)
      assert.equal((html.match(/<h1(?: |\>)/g) || []).length, 1, 'One main heading in each chapter')
      assert.equal((html.match(/aria-current="page"/g) || []).length, 1, 'Exactly one current chapter')
      assert.ok(html.includes(`href="#${chapter}" aria-current="page"`), 'Deep link selects the requested chapter')
      assert.ok(!html.includes('spring.'), 'New UI strings are translated')
      if (chapter === 'projects') {
        for (const project of projects) assert.ok(html.includes(i18n.t(`projects.list.${project.id}.title`)), `Project retained: ${project.id}`)
      }
      if (chapter === 'top' || chapter === 'contact') assert.ok(html.includes(socials.cv[language]), 'Correct CV for language')
      for (const match of html.matchAll(/(?:src|href)="(\/portafolio\/[^"#?]+)"/g)) {
        const path = resolve('public', match[1].slice(base.length))
        assert.ok(existsSync(path), `Missing local asset: ${path}`)
      }
      count++
    }
  }
  const css = readFileSync('dist/assets/' + readFileSync('dist/index.html', 'utf8').match(/assets\/(index-[^" ]+\.css)/)[1], 'utf8')
  for (const match of css.matchAll(/url\((?:"|')?(\/portafolio\/[^)"']+)/g)) {
    assert.ok(existsSync(resolve('dist', match[1].slice(base.length))), `Missing built asset: ${match[1]}`)
  }
  console.log(`OK: ${count} chapter/language renders; all 9 projects, both CVs and built assets verified.`)
} finally {
  delete globalThis.window
  await server.close()
}
