import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { projects } from '../data/projects.js'
import { asset } from '../data/asset.js'

function Media({ title, image }) {
  const [failed, setFailed] = useState(false)
  if (image && !failed) {
    return <img src={asset(image)} alt={`${title} preview`} loading="lazy" onError={() => setFailed(true)} />
  }
  return (
    <div className="project-blank" aria-hidden="true">
      <span>{title.charAt(0)}</span>
    </div>
  )
}

function Architecture({ architecture }) {
  return (
    <div className="arch">
      <h3 className="project-label">Architecture</h3>
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

function Project({ project }) {
  const { title, summary, image, unique, stack, links, stats, architecture, decisions } = project
  return (
    <article className="project">
      <h2 className="project-title">{title}</h2>
      {summary && <p className="project-summary">{summary}</p>}
      <div className="project-grid">
        <div className="project-media">
          <Media title={title} image={image} />
        </div>
        <div className="project-info">
          <h3 className="project-label">What makes it different</h3>
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
        <div className="project-deep">
          {architecture && <Architecture architecture={architecture} />}
          {decisions?.length > 0 && (
            <div>
              <h3 className="project-label">Design decisions</h3>
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

      <h3 className="project-label">Built with</h3>
      <ul className="tags">
        {stack.map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
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
