import { Link } from 'react-router-dom'
import DotField from '../components/DotField.jsx'
import { site } from '../data/site.js'
import { goal, education } from '../data/content.js'

export default function About() {
  return (
    <>
      <section className="hero">
        <DotField />
        <div className="container hero-inner">
          <h1 className="hero-name" aria-label={site.name}>
            {[...site.name].map((letter, i) => (
              <span key={i} className="hero-letter" style={{ '--i': i }} aria-hidden="true">
                {letter}
              </span>
            ))}
          </h1>
          <div className="hero-foot">
            <p className="hero-role">
              <strong>{site.role}.</strong> {site.tagline}
            </p>
            <div className="hero-actions">
              <Link className="button" to="/projects">See my projects</Link>
              <Link className="button button--ghost" to="/resume">View resume</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container split">
        <h2 className="split-title">My goal</h2>
        <p className="statement">{goal}</p>
      </section>

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
