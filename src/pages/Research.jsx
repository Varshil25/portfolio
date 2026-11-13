import PageHeader from '../components/PageHeader.jsx'
import { research, achievements } from '../data/content.js'

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
                <h3 className="row-title">
                  {item.link ? <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a> : item.title}
                </h3>
                <p className="row-sub">{item.venue}</p>
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
              </div>
              <span className="row-meta">{item.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
