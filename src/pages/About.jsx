import { Link } from 'react-router-dom'
import DotField from '../components/DotField.jsx'
import { site } from '../data/site.js'
import { asset } from '../data/asset.js'
import { goal, education } from '../data/content.js'

export default function About() {
  return (
    <>
      <section className="hero">
        <DotField />
        <div className="container hero-inner">
          <h1 className="hero-name" aria-label={site.fullName}>
            {[...site.fullName].map((letter, i) => (
              <span key={i} className="hero-letter" style={{ '--i': i }} aria-hidden="true">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          <div className={`hero-foot ${site.photo ? 'has-photo' : ''}`}>
            <div className="hero-text">
              <p className="hero-lede">
                {site.role}. <span>{site.affiliation}.</span>
              </p>
              <p className="hero-bio">{site.bio}</p>
              {site.availability && <p className="hero-avail">{site.availability}</p>}
              <div className="hero-actions">
                <Link className="button" to="/projects">See my projects</Link>
                <Link className="button button--ghost" to="/resume">View resume</Link>
                {site.email && <a className="hero-link" href={`mailto:${site.email}`}>Email</a>}
                {site.links.github && <a className="hero-link" href={site.links.github} target="_blank" rel="noreferrer">GitHub</a>}
                {site.links.linkedin && <a className="hero-link" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
              </div>
            </div>
            {site.photo && <img className="hero-photo" src={asset(site.photo)} alt={site.fullName} />}
          </div>
        </div>
      </section>

      {goal && (
        <section className="container split">
          <h2 className="split-title">My goal</h2>
          <p className="statement">{goal}</p>
        </section>
      )}

      <section className="container split">
        <h2 className="split-title">Education</h2>
        <ul className="rows">
          {education.map((item) => (
            <li key={item.degree} className="row">
              <div>
                <h3 className="row-title">{item.degree}</h3>
                <p className="row-sub">{item.school}</p>
                {item.note && <p className="row-note">{item.note}</p>}
              </div>
              {item.years && <span className="row-meta">{item.years}</span>}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
