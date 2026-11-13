import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label={`${site.name}, home`}>
      <svg className="logo-mark" viewBox="0 0 36 36" aria-hidden="true">
        <rect className="logo-tile" width="36" height="36" rx="10" />
        <path className="logo-v" d="M10 11l8 15 8-15" />
        <circle className="logo-dot" cx="28" cy="27" r="2.6" />
      </svg>
      <span className="logo-text">{site.name}</span>
    </Link>
  )
}
