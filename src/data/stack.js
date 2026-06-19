// Stack data — minimal glyph + list of items.
// No lucide icons, just typographic marks for a non "AI-generated" look.

export const stackCategories = [
  {
    id: 'languages',
    glyph: '01',
    items: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'Bash', 'PowerShell'],
  },
  {
    id: 'backend',
    glyph: '02',
    items: ['FastAPI', 'Django', 'SQLAlchemy 2.0', 'Celery', 'Alembic'],
  },
  {
    id: 'frontend',
    glyph: '03',
    items: ['React 19', 'TypeScript', 'Vite', 'Tailwind v4', 'TanStack Query', 'Recharts'],
  },
  {
    id: 'databases',
    glyph: '04',
    items: ['PostgreSQL 16', 'pgvector', 'SQLite', 'Redis'],
  },
  {
    id: 'ai',
    glyph: '05',
    items: ['Ollama', 'Qwen 2.5', 'Whisper', 'YOLO', 'OpenCV', 'Anthropic API'],
  },
  {
    id: 'devops',
    glyph: '06',
    items: ['Docker', 'Compose', 'Nginx', 'Vercel', 'Render', 'Actions'],
  },
  {
    id: 'sysadmin',
    glyph: '07',
    items: ['Linux (Debian)', 'Windows Server', 'Active Directory', 'CIS hardening'],
  },
  {
    id: 'integrations',
    glyph: '08',
    items: ['Stripe', 'Telegram Bot', 'TMDB', 'AWS scripting'],
  },
]
