import PageHeader from '../components/PageHeader.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <>
      <PageHeader title="Experience" intro="Where I've worked and what I did there." />
      <ol className="container timeline">
        {experience.map((job) => (
          <li key={job.role + job.company} className="timeline-item">
            <span className="timeline-years">{job.years}</span>
            <div className="timeline-body">
              <h2 className="timeline-role">{job.role}</h2>
              <p className="timeline-company">{job.company}</p>
              <ul className="timeline-points">
                {job.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              {job.stack?.length > 0 && (
                <ul className="tags timeline-stack">
                  {job.stack.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
              )}
              {(job.links?.live || job.links?.code) && (
                <p className="project-links">
                  {job.links.live && <a className="button" href={job.links.live} target="_blank" rel="noreferrer">Open live prototype</a>}
                  {job.links.code && <a className="button button--ghost" href={job.links.code} target="_blank" rel="noreferrer">View code</a>}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}
