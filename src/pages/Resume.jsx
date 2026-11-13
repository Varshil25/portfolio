import PageHeader from '../components/PageHeader.jsx'
import { site } from '../data/site.js'
import { asset } from '../data/asset.js'

export default function Resume() {
  return (
    <>
      <PageHeader title="Resume" intro="Read it here or download the PDF." />
      <div className="container">
        {site.resume ? (
          <>
            <a className="button" href={asset(site.resume)} download>Download PDF</a>
            <iframe className="resume-frame" src={asset(site.resume)} title="Resume" />
          </>
        ) : (
          <div className="empty">
            <p className="empty-title">No resume uploaded yet</p>
            <p>Add <code>resume.pdf</code> to the <code>public</code> folder, then set <code>resume</code> in <code>src/data/site.js</code>.</p>
          </div>
        )}
      </div>
    </>
  )
}
