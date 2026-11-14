import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ProjectMedia from '../components/ProjectMedia.jsx'
import { projects } from '../data/projects.js'

const ALL = 'All'
const categories = [ALL, ...new Set(projects.map((project) => project.category))]
const MAX_TAGS = 4

function ProjectCard({ project, featured }) {
  const { slug, title, category, tagline, image, stack } = project
  const extra = stack.length - MAX_TAGS
  return (
    <article className={`pcard ${featured ? 'pcard--featured' : ''}`}>
      <div className="pcard-head">
        <h2 className="pcard-title">
          <Link to={`/projects/${slug}`}>{title}</Link>
        </h2>
        <span className="pcard-category">{category}</span>
      </div>
      <div className="project-media pcard-media">
        <ProjectMedia title={title} image={image} />
      </div>
      <div className="pcard-body">
        <p className="pcard-tagline">{tagline}</p>
        <ul className="tags pcard-tags">
          {stack.slice(0, MAX_TAGS).map((tech) => <li key={tech}>{tech}</li>)}
          {extra > 0 && <li className="tags-more">+{extra} more</li>}
        </ul>
      </div>
    </article>
  )
}

export default function Projects() {
  const [category, setCategory] = useState(ALL)
  const shown = category === ALL ? projects : projects.filter((project) => project.category === category)

  return (
    <>
      <PageHeader title="Projects" intro="Things I've built, and what sets each one apart. Open a project for the full story." />
      <div className="container">
        {categories.length > 2 && (
          <div className="filters" role="group" aria-label="Filter projects by type">
            {categories.map((name) => (
              <button
                key={name}
                type="button"
                className={`filter ${name === category ? 'is-active' : ''}`}
                aria-pressed={name === category}
                onClick={() => setCategory(name)}
              >
                {name}
                <span>{name === ALL ? projects.length : projects.filter((p) => p.category === name).length}</span>
              </button>
            ))}
          </div>
        )}
        <div className="pgrid">
          {shown.map((project, i) => (
            <ProjectCard key={project.slug} project={project} featured={category === ALL && i === 0} />
          ))}
        </div>
      </div>
    </>
  )
}
