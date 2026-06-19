import {
  Code2,
  Server,
  Layout,
  Database,
  Brain,
  Container,
  Terminal,
  Plug,
} from 'lucide-react'

export const stackCategories = [
  {
    id: 'languages',
    icon: Code2,
    items: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'Bash', 'PowerShell'],
  },
  {
    id: 'backend',
    icon: Server,
    items: ['FastAPI', 'Django', 'SQLAlchemy 2.0', 'Celery', 'Alembic'],
  },
  {
    id: 'frontend',
    icon: Layout,
    items: ['React 18/19', 'TypeScript', 'Vite', 'Tailwind v4', 'TanStack Query', 'Recharts'],
  },
  {
    id: 'databases',
    icon: Database,
    items: ['PostgreSQL 16', 'pgvector', 'SQLite', 'Redis'],
  },
  {
    id: 'ai',
    icon: Brain,
    items: ['Ollama', 'Qwen 2.5', 'Whisper', 'YOLO', 'OpenCV', 'Embeddings', 'Anthropic API'],
  },
  {
    id: 'devops',
    icon: Container,
    items: ['Docker', 'Docker Compose', 'Nginx', 'Vercel', 'Render', 'GitHub Actions'],
  },
  {
    id: 'sysadmin',
    icon: Terminal,
    items: ['Linux (Debian)', 'Windows Server', 'Active Directory', 'Security audit (CIS)'],
  },
  {
    id: 'integrations',
    icon: Plug,
    items: ['Stripe', 'Telegram Bot API', 'TMDB', 'AWS scripting'],
  },
]
