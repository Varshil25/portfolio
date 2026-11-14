import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { experience } from '../data/content.js'

// Months since year 0, so roles can be placed on one shared time axis.
const toMonths = (value) => {
  const [year, month] = value.split('-').map(Number)
  return year * 12 + (month - 1)
}

const now = new Date()
const AXIS_END = now.getFullYear() * 12 + now.getMonth() + 1
const AXIS_START = Math.min(...experience.map((job) => toMonths(job.start)))
const SPAN = AXIS_END - AXIS_START

const YEARS = []
for (let year = Math.ceil(AXIS_START / 12); year * 12 < AXIS_END; year += 1) {
  YEARS.push({ year, left: ((year * 12 - AXIS_START) / SPAN) * 100 })
}

function bar(job) {
  const start = toMonths(job.start)
  const end = job.end ? toMonths(job.end) + 1 : AXIS_END
  return { left: `${((start - AXIS_START) / SPAN) * 100}%`, width: `${((end - start) / SPAN) * 100}%` }
}

export default function Experience() {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <PageHeader
        title="Experience"
        intro={`${experience.length} roles since ${Math.floor(AXIS_START / 12)}. Select one to see what I did there.`}
      />

      <div className="container">
        <div className="xp" style={{ '--rows': experience.length }}>
          <div className="xp-axis" aria-hidden="true">
            <div className="xp-axis-track">
              {YEARS.map(({ year, left }) => (
                <span key={year} style={{ left: `${left}%` }}>{year}</span>
              ))}
            </div>
          </div>

          {experience.map((job, i) => {
            const open = i === selected
            return [
              <button
                key={`row-${i}`}
                type="button"
                className={`xp-row ${open ? 'is-open' : ''}`}
                style={{ gridRow: i + 2 }}
                aria-expanded={open}
                aria-controls="xp-panel"
                onClick={() => setSelected(i)}
              >
                <span className="xp-row-text">
                  <span className="xp-role">{job.role}</span>
                  <span className="xp-company">{job.company}</span>
                </span>
                <span className="xp-when">
                  <span className="xp-track">
                    <span className={`xp-bar ${job.end ? '' : 'is-ongoing'}`} style={bar(job)} />
                  </span>
                  <span className="xp-years">{job.years}</span>
                </span>
              </button>,
              open && (
                <section key="panel" id="xp-panel" className="xp-panel" aria-label={`${job.role}, ${job.company}`}>
                  <ul className="timeline-points">
                    {job.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  {job.stack?.length > 0 && (
                    <ul className="tags xp-tags">
                      {job.stack.map((tech) => <li key={tech}>{tech}</li>)}
                    </ul>
                  )}
                  {(job.links?.live || job.links?.code) && (
                    <p className="project-links">
                      {job.links.live && <a className="button" href={job.links.live} target="_blank" rel="noreferrer">Open live prototype</a>}
                      {job.links.code && <a className="button button--ghost" href={job.links.code} target="_blank" rel="noreferrer">View code</a>}
                    </p>
                  )}
                </section>
              ),
            ]
          })}
        </div>
      </div>
    </>
  )
}
