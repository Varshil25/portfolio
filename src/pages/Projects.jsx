import PageHeader from '../components/PageHeader.jsx'
import { projects } from '../data/projects.js'

function Project({ project }) {
  const { title, image, unique, stack, links } = project
  return (
    <article className="project">
      <h2 className="project-title">{title}</h2>
      <div className="project-grid">
        <div className="project-media">
          {image ? (
            <img src={image} alt={`${title} preview`} loading="lazy" />
          ) : (
            <div className="project-blank" aria-hidden="true">
              <span>{title.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="project-info">
          <h3 className="project-label">What makes it different</h3>
          <p className="project-unique">{unique}</p>
          <h3 className="project-label">Built with</h3>
          <ul className="tags">
            {stack.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
          {(links?.live || links?.code) && (
            <p className="project-links">
              {links.live && <a className="button" href={links.live} target="_blank" rel="noreferrer">Open live site</a>}
              {links.code && <a className="button button--ghost" href={links.code} target="_blank" rel="noreferrer">View code</a>}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <PageHeader title="Projects" intro="Things I've built, and what sets each one apart." />
      <div className="container projects">
        {projects.map((project) => <Project key={project.title} project={project} />)}
      </div>
    </>
  )
}
