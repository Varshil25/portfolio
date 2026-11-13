import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label={`${site.name}, home`}>
      <span className="logo-mark" aria-hidden="true">{site.initials}</span>
      <span className="logo-text">{site.name}</span>
    </Link>
  )
}
