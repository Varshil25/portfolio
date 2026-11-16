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
            <p className="project-links resume-actions">
              <a className="button" href={asset(site.resume)} download>Download PDF</a>
              <a className="button button--ghost" href={asset(site.resume)} target="_blank" rel="noreferrer">Open in new tab</a>
            </p>
            {site.resumePreview ? (
              <a className="resume-sheet" href={asset(site.resume)} target="_blank" rel="noreferrer">
                <img src={asset(site.resumePreview)} alt={`Resume of ${site.fullName}. Open the PDF for a readable, selectable copy.`} />
              </a>
            ) : (
              <iframe className="resume-frame" src={asset(site.resume)} title="Resume" />
            )}
          </>
        ) : (
          <div className="empty">
            <p className="empty-title">Resume coming soon</p>
            <p>In the meantime, my experience and projects are on the other pages.</p>
          </div>
        )}
      </div>
    </>
  )
}
