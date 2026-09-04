# Portafolio - Javier Maroto

Portfolio personal de Javier Jose Maroto Dominguez.

Live: <https://jv-maroto.github.io/portafolio/>

## Stack

- Vite 8 + React 19
- Tailwind CSS v4 (via `@tailwindcss/vite`, tokens en `src/index.css`)
- i18next + react-i18next (ES y EN)
- Sin librerias de animacion: el unico movimiento es CSS nativo y la
  View Transitions API para el cambio de tema
- Fuentes IBM Plex Sans y Mono auto-hospedadas en `public/fonts`
- Modo claro por defecto con toggle a oscuro, persistido en `localStorage`

## Estructura

```
src/
  components/        # Header, Hero, NowBoard, About, Projects,
                     # FeaturedProject, ProjectRow, Stack, Experience,
                     # Contact, Footer
    icons/           # SVG inline de marcas
  data/              # projects.js, stack.js, socials.js
  hooks/             # useTheme.js
  locales/           # es.json, en.json (todo el texto visible)
  index.css          # tokens @theme, @font-face, estilos base
public/
  now.json           # aprendiendo, editable en github.com
  fonts/             # woff2, subset latino
  cv/                # CV en espanol e ingles
  screenshots/       # capturas reales de proyectos, webp
  og-image.png       # imagen para redes, 1200x630
```

## Comandos

```bash
npm install
npm run dev        # http://localhost:5173/portafolio/
npm run build
npm run preview
npm run lint
npm run deploy     # publica dist/ en la rama gh-pages
```

Vite 8 requiere Node 20.19 o superior.

## Tablero "neofetch"

El panel del hero no necesita ningun servidor propio. Sus datos salen de:

- **La API publica de GitHub**, en el navegador del visitante: repos
  publicos, lenguaje mas usado y ultimo push (el repo con `pushed_at` mas
  reciente). Automatico, sin token.
- **`public/now.json`** para lo que solo tu sabes: `learning` (es/en). El navegador lo lee de la rama `main` en GitHub
  (`raw.githubusercontent.com`), asi que basta con editar el archivo en
  github.com y guardar: el tablero cambia sin volver a publicar la web.
  `null` o vacio muestra "sin datos". Actualiza tambien `updated`.

## Contenido pendiente de Javier

- Casos de estudio de SportEvent, FitDash y WinSvalinn: los campos
  `case.problem`, `case.decision` y `case.result` de cada uno en
  `src/locales/*.json` estan vacios y no se muestran hasta rellenarlos.
- Repasar los textos de `hero`, `about`, `homelab` y `contact`.
- JobHunter no tiene captura: con una en
  `public/screenshots/projects/jobhunter.webp` y `featured: true` en
  `src/data/projects.js` pasa a destacado.
- Los repos `sportevent`, `servidor-pi` y `pyaws-practice` son privados o
  no existen: por eso no tienen enlace a codigo. Si se hacen publicos,
  basta con poner la URL en `src/data/projects.js`.

Las capturas (`public/screenshots/projects/*.webp`) y los dos CV
(`public/cv/`, uno por idioma) vienen de la version publicada anterior.

## Datos y contenido

- Texto: `src/locales/es.json` y `src/locales/en.json`.
- Proyectos (URLs, stack, dimensiones de captura): `src/data/projects.js`.
- Stack: `src/data/stack.js`.
- Email, GitHub y LinkedIn: `src/data/socials.js`. El telefono no se publica.
