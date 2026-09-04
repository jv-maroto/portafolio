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
  cv/                # CV en espanol e ingles
  screenshots/       # capturas reales de proyectos, webp
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

El hero muestra un panel estilo `neofetch`. Sus datos salen de dos sitios:

- `public/now.json`, que el navegador lee **de la rama main en GitHub**
  (`raw.githubusercontent.com/.../main/public/now.json`). Por eso basta con
  hacer push del archivo para que cambie el tablero: no hace falta
  volver a publicar la web. El archivo local es el respaldo si GitHub no
  responde.
- La API publica de GitHub, para "ultimo push": el repo con `pushed_at`
  mas reciente. Es automatico.

Campos de `now.json`:

| Campo | Quien lo rellena | Como |
|---|---|---|
| `server.host`, `server.os` | El script en la Pi | `hostname` y `/etc/os-release` |
| `server.uptime` | El script en la Pi | `uptime -p` |
| `server.containers` | El script en la Pi | `docker ps -q \| wc -l` |
| `learning.es` / `learning.en` | Tu, a mano | Variables al principio del script, o editando el JSON |
| `playing` | Tu, a mano | Igual. Vacio o `null` muestra "sin datos" |
| `updated` | El script | Fecha UTC de la ultima ejecucion |

Para que la Pi lo mantenga al dia, clona el repo en ella con una clave de
despliegue con permiso de escritura y pon `scripts/update-now.sh` en cron:

```
0 7 * * * /home/pi/portafolio/scripts/update-now.sh
```

Si no quieres cron todavia, edita `public/now.json` a mano y haz push:
el tablero cambia en el siguiente refresco.

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
