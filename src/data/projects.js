// Metadatos de proyecto. Titulo, descripcion y caso de estudio viven en i18n.
// width/height evitan el salto de layout al cargar la captura.

const BASE = import.meta.env.BASE_URL

export const projects = [
  {
    id: 'sportevent',
    image: `${BASE}screenshots/sportevent.svg`,
    width: 1600,
    height: 900,
    stack: ['FastAPI', 'React 19', 'PostgreSQL', 'Stripe', 'Docker'],
    github: 'https://github.com/jv-maroto/sportevent',
    live: null,
    featured: true,
  },
  {
    id: 'fitdash',
    image: `${BASE}screenshots/fitdash.svg`,
    width: 1600,
    height: 900,
    stack: ['FastAPI', 'Telegram', 'Ollama', 'Qwen 2.5', 'Whisper', 'Redis', 'Recharts'],
    github: 'https://github.com/jv-maroto/fitdash',
    live: null,
    featured: true,
  },
  {
    id: 'winsvalinn',
    image: `${BASE}screenshots/winsvalinn/dashboard.png`,
    imageDark: `${BASE}screenshots/winsvalinn/gamer-dashboard.png`,
    width: 1600,
    height: 900,
    stack: ['Python', 'Windows internals', 'CIS hardening'],
    github: 'https://github.com/jv-maroto/WinSvalinn',
    live: null,
    featured: true,
  },
  {
    id: 'cinestream',
    stack: ['FastAPI', 'Celery', 'pgvector', 'YOLO', 'OpenCV', 'React TS'],
    github: 'https://github.com/jv-maroto/cinestream',
    live: null,
    featured: false,
  },
  {
    id: 'portalEmployes',
    stack: ['Django', 'React', 'Tailwind', 'Render'],
    github: 'https://github.com/jv-maroto/Portal-Employes',
    live: 'https://portal-employes.onrender.com',
    featured: false,
  },
  {
    id: 'servidorPi',
    stack: ['Docker', 'Jellyfin', '*arr', 'Pi-hole', 'Calibre', 'PowerShell'],
    github: 'https://github.com/jv-maroto/servidor-pi',
    live: null,
    featured: false,
  },
  {
    id: 'pyawsPractice',
    stack: ['React 19', 'TypeScript', 'Vite', 'Vercel'],
    github: 'https://github.com/jv-maroto/pyaws-practice',
    live: 'https://pyaws-practice.vercel.app',
    featured: false,
  },
]
