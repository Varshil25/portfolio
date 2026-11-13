import { site } from '../data/site.js'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const links = [
    site.email && { href: `mailto:${site.email}`, label: 'Email' },
    site.links.github && { href: site.links.github, label: 'GitHub' },
    site.links.linkedin && { href: site.links.linkedin, label: 'LinkedIn' },
  ].filter(Boolean)

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-call">Have something to build? Get in touch.</p>
        <ul className="footer-links">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer">{label}</a>
            </li>
          ))}
        </ul>
        <p className="footer-note">© {YEAR} {site.name}</p>
      </div>
    </footer>
  )
}
