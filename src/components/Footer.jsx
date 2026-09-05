import { profile } from '../data/profile'

export default function Footer() {
  return <footer className="site-footer">&copy; {new Date().getFullYear()} {profile.name}<span aria-hidden="true"> · </span><a href="https://github.com/jv-maroto" target="_blank" rel="noopener noreferrer">GitHub ↗</a></footer>
}
