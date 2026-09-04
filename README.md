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
  now.json           # datos del tablero "Ahora mismo"
  fonts/             # woff2, subset latino
  cv/                # PDF del CV
  screenshots/       # capturas de proyectos
  og-image.png       # imagen para redes, 1200x630
scripts/
  update-now.sh      # actualiza now.json desde el servidor
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

## Tablero "Ahora mismo"

El hero muestra `public/now.json`: servidor, uptime, contenedores y que
se esta aprendiendo. El ultimo push se lee de la API publica de GitHub en
el navegador. Los campos a `null` se muestran como "sin datos": no se
inventa nada.

Para mantenerlo al dia desde la Raspberry Pi, `scripts/update-now.sh`
escribe el archivo y hace commit. Un cron diario basta:

```
0 7 * * * /ruta/al/repo/scripts/update-now.sh
```

## Contenido pendiente de Javier

- Capturas reales en `public/screenshots/` (hoy hay SVG de relleno
  para todos menos WinSvalinn).
- Casos de estudio de SportEvent, FitDash y WinSvalinn: los campos
  `case.problem`, `case.decision` y `case.result` de cada uno en
  `src/locales/*.json` estan vacios y no se muestran hasta rellenarlos.
- CV definitivo en `public/cv/javier-maroto-cv.pdf`.
- Repasar los textos de `hero`, `about` y `contact` para que suenen a el.

## Datos y contenido

- Texto: `src/locales/es.json` y `src/locales/en.json`.
- Proyectos (URLs, stack, dimensiones de captura): `src/data/projects.js`.
- Stack: `src/data/stack.js`.
- Email, GitHub y LinkedIn: `src/data/socials.js`. El telefono no se publica.
