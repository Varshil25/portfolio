import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label={`${site.fullName}, home`}>
      <span className="logo-mark" aria-hidden="true">{site.initials}</span>
    </Link>
  )
}
