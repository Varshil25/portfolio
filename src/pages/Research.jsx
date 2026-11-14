import PageHeader from '../components/PageHeader.jsx'
import { research, achievements } from '../data/content.js'
import { asset } from '../data/asset.js'

export default function Research() {
  return (
    <>
      <PageHeader title="Research and achievements" intro="Papers, research projects and recognition." />

      <section className="container split">
        <h2 className="split-title">Research</h2>
        <ul className="rows">
          {research.map((item) => (
            <li key={item.title} className="row">
              <div>
                <h3 className="row-title">{item.title}</h3>
                <p className="row-sub">{item.venue}</p>
                {item.summary && <p className="row-note">{item.summary}</p>}
                {item.points?.length > 0 && (
                  <>
                    {item.outcomesLabel && <p className="row-label">{item.outcomesLabel}</p>}
                    <ul className="timeline-points row-points">
                      {item.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </>
                )}
                {item.next && <p className="row-sub">{item.next}</p>}
                {item.link && (
                  <p className="project-links">
                    <a className="button button--ghost" href={item.link} target="_blank" rel="noreferrer">View study repository</a>
                  </p>
                )}
              </div>
              <span className="row-meta">{item.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container split">
        <h2 className="split-title">Achievements</h2>
        <ul className="rows">
          {achievements.map((item) => (
            <li key={item.title} className="row">
              <div>
                <h3 className="row-title">{item.title}</h3>
                <p className="row-sub">{item.detail}</p>
                {item.certificate && (
                  <p className="row-note">
                    <a href={asset(item.certificate)} target="_blank" rel="noreferrer">View certificate</a>
                  </p>
                )}
              </div>
              <span className="row-meta">{item.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
