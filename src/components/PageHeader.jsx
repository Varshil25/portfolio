export default function PageHeader({ title, intro }) {
  return (
    <div className="page-header container">
      <h1 className="page-title">{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </div>
  )
}
