import { useState } from 'react'
import { asset } from '../data/asset.js'

// Shows the project's image, or a lettered placeholder if there is none or it fails to load.
export default function ProjectMedia({ title, image }) {
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
