// Metadatos de proyecto. Titulo, descripcion y caso de estudio viven en i18n.
// Capturas reales en public/screenshots/projects. width/height son las
// dimensiones exactas del archivo para evitar el salto de layout al cargar.
// github: null cuando el repositorio no es publico; live: null sin demo.

const BASE = import.meta.env.BASE_URL
const shot = (name) => `${BASE}screenshots/projects/${name}.webp`

export const projects = [
  {
    id: 'sportevent',
    image: shot('sportevent'),
    width: 1280,
    height: 800,
    stack: ['FastAPI', 'React 19', 'PostgreSQL', 'Stripe', 'Docker'],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 'fitdash',
    image: shot('fitdash'),
    width: 1280,
    height: 800,
    stack: ['FastAPI', 'Telegram', 'Ollama', 'Qwen 2.5', 'Whisper', 'Redis', 'Recharts'],
    github: 'https://github.com/jv-maroto/fitdash',
    live: null,
    featured: true,
  },
  {
    id: 'winsvalinn',
    image: shot('winsvalinn'),
    width: 1360,
    height: 900,
    stack: ['Python', 'Windows internals', 'CIS hardening'],
    github: 'https://github.com/jv-maroto/Project-WinSvalinn',
    live: null,
    featured: true,
  },
  {
    id: 'jobhunter',
    stack: ['FastAPI', 'React', 'SQLite', 'Ollama', 'Typst', 'Chrome extension'],
    github: 'https://github.com/jv-maroto/jobhunter-oss',
    live: null,
    featured: false,
    wip: true,
  },
  {
    id: 'cinestream',
    image: shot('cinestream'),
    width: 1280,
    height: 800,
    stack: ['FastAPI', 'Celery', 'pgvector', 'YOLO', 'OpenCV', 'React TS'],
    github: 'https://github.com/jv-maroto/cinestream',
    live: null,
    featured: false,
  },
  {
    id: 'portalEmployes',
    image: shot('portal-employes'),
    width: 1829,
    height: 936,
    stack: ['Django', 'React', 'Tailwind'],
    github: 'https://github.com/jv-maroto/Portal-Employes',
    live: null,
    featured: false,
  },
  {
    id: 'fitnessAppPro',
    image: shot('fitness-app-pro'),
    width: 1552,
    height: 737,
    stack: ['TypeScript', 'Open Food Facts'],
    github: 'https://github.com/jv-maroto/fitness-app-pro',
    live: null,
    featured: false,
  },
  {
    id: 'servidorPi',
    image: shot('servidor-pi'),
    width: 1280,
    height: 720,
    stack: ['Docker', 'Jellyfin', '*arr', 'Pi-hole', 'Calibre', 'PowerShell'],
    github: null,
    live: null,
    featured: false,
  },
  {
    id: 'pyawsPractice',
    image: shot('pyaws-practice'),
    width: 1280,
    height: 720,
    stack: ['React 19', 'TypeScript', 'Vite', 'Vercel'],
    github: null,
    live: 'https://pyaws-practice.vercel.app',
    featured: false,
  },
]
