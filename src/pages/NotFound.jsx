import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" intro="That address doesn't match any page here." />
      <div className="container">
        <Link className="button" to="/">Go to the home page</Link>
      </div>
    </>
  )
}
