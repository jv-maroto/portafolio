# Portafolio v2 - Javier Maroto

Portfolio personal de **Javier José Maroto Domínguez**, Full-Stack Python + AI Engineer.

Live: <https://jv-maroto.github.io/portafolio/>

## Stack

- Vite 8 + React 19
- Tailwind CSS v4 (vía `@tailwindcss/vite`, sin `tailwind.config.js`)
- i18next + react-i18next (idiomas ES y EN)
- Framer Motion para animaciones de entrada
- lucide-react para iconos (iconos de marca GitHub / LinkedIn van inline en `src/components/icons/`)
- Dark mode por defecto con toggle a light (clase `.dark` en `<html>`, persistida en `localStorage`)

## Estructura

```
src/
  components/        # Header, Hero, About, Projects, Stack, Experience, Contact, Footer
    icons/           # SVG inline de marcas
  data/              # projects.js, stack.js, socials.js (datos no-i18n)
  hooks/             # useTheme.js
  locales/           # es.json, en.json (todo el contenido textual)
  i18n.js            # config react-i18next
  App.jsx
  main.jsx
  index.css          # @import "tailwindcss" + tokens + utilidades hero-gradient / grid-bg
public/
  cv/                # PDF del CV (placeholder, reemplazar por el final)
  screenshots/       # SVG placeholders + PNGs reales de WinSvalinn
  favicon.svg
```

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173/portafolio/)
npm run dev

# Build de producción (carpeta dist/)
npm run build

# Previsualizar el build
npm run preview

# Lint
npm run lint

# Desplegar a GitHub Pages (rama gh-pages)
npm run deploy
```

## Despliegue en GitHub Pages

`vite.config.js` define `base: '/portafolio/'`, así que el sitio se sirve en
`https://<usuario>.github.io/portafolio/`. Para publicar:

```bash
npm run deploy
```

`gh-pages -d dist` hace el push del contenido de `dist/` a la rama `gh-pages`
del repositorio configurado como `origin`. Asegúrate de que el repo tenga
GitHub Pages activado apuntando a `gh-pages` / root.

## Datos y contenido

- Todo el texto visible vive en `src/locales/es.json` y `src/locales/en.json`.
- Stack técnico: `src/data/stack.js`.
- Proyectos (URLs, stack, accent gradient): `src/data/projects.js`.
- Email, GitHub, LinkedIn y teléfono: `src/data/socials.js`.

## Sustituir el CV

El CV PDF en `public/cv/javier-maroto-cv.pdf` es un placeholder mínimo.
Sustitúyelo por el PDF definitivo conservando el mismo nombre y el botón
"Download CV" del Hero y la sección Contact lo descargará automáticamente.

## Imágenes de proyectos

- WinSvalinn usa screenshots reales en `public/screenshots/winsvalinn/`.
- El resto usan SVG generados con gradiente + nombre + stack en
  `public/screenshots/<id>.svg`. Cuando haya screenshots reales, sustituye
  el archivo o actualiza la ruta `image` en `src/data/projects.js`.

## SEO

`index.html` incluye meta tags Open Graph y Twitter Card, con la URL
`https://jv-maroto.github.io/portafolio/og-image.png` para la imagen
social (pendiente de generar y subir).
