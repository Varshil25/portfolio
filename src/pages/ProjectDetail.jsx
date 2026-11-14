import { Link, useParams } from 'react-router-dom'
import ProjectMedia from '../components/ProjectMedia.jsx'
import NotFound from './NotFound.jsx'
import { projects } from '../data/projects.js'

function Architecture({ architecture }) {
  return (
    <div className="arch">
      <h2 className="project-label">Architecture</h2>
      <ol className="arch-layers">
        {architecture.layers.map((layer) => (
          <li key={layer.name} className="arch-layer">
            <p className="arch-name">
              {layer.name}
              {layer.tech && <span>{layer.tech}</span>}
            </p>
            <ul className="arch-nodes">
              {layer.nodes.map((node) => <li key={node}>{node}</li>)}
            </ul>
          </li>
        ))}
      </ol>
      {architecture.note && <p className="arch-note">{architecture.note}</p>}
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return <NotFound />

  const { title, category, summary, image, unique, stack, links, stats, architecture, decisions } = projects[index]
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null

  return (
    <article className="container project">
      <p className="crumb">
        <Link to="/projects">All projects</Link>
        <span>{category}</span>
      </p>
      <h1 className="project-title">{title}</h1>
      {summary && <p className="project-summary">{summary}</p>}

      <div className="project-grid">
        <div className="project-media">
          <ProjectMedia title={title} image={image} />
        </div>
        <div className="project-info">
          <h2 className="project-label">What makes it different</h2>
          <p className="project-unique">{unique}</p>
          {(links?.live || links?.code) && (
            <p className="project-links">
              {links.live && <a className="button" href={links.live} target="_blank" rel="noreferrer">Open live site</a>}
              {links.code && <a className="button button--ghost" href={links.code} target="_blank" rel="noreferrer">View code</a>}
            </p>
          )}
        </div>
      </div>

      {stats?.length > 0 && (
        <dl className="project-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {(architecture || decisions?.length > 0) && (
        <div className={`project-deep ${architecture && decisions?.length > 0 ? '' : 'project-deep--single'}`}>
          {architecture && <Architecture architecture={architecture} />}
          {decisions?.length > 0 && (
            <div>
              <h2 className="project-label">Design decisions</h2>
              <ul className="decisions">
                {decisions.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="project-stack">
        <h2 className="project-label">Built with</h2>
        <ul className="tags">
          {stack.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
      </div>

      {next && (
        <Link className="next-project" to={`/projects/${next.slug}`}>
          <span>Next project</span>
          <strong>{next.title}</strong>
        </Link>
      )}
    </article>
  )
}
