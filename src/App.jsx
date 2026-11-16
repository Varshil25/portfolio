import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { site } from './data/site.js'
import { projects } from './data/projects.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Experience from './pages/Experience.jsx'
import Research from './pages/Research.jsx'
import Resume from './pages/Resume.jsx'
import NotFound from './pages/NotFound.jsx'

const PAGE_TITLES = {
  '/': `${site.fullName} | ${site.role}`,
  '/projects': `Projects | ${site.fullName}`,
  '/experience': `Experience | ${site.fullName}`,
  '/research': `Research and achievements | ${site.fullName}`,
  '/resume': `Resume | ${site.fullName}`,
}

function titleFor(pathname) {
  const path = pathname.replace(/\/$/, '') || '/'
  if (PAGE_TITLES[path]) return PAGE_TITLES[path]
  const project = projects.find((item) => path === `/projects/${item.slug}`)
  return project ? `${project.title} | ${site.fullName}` : site.fullName
}

export default function App() {
  const { pathname } = useLocation()

  // Give every page its own browser-tab title and start it at the top.
  useEffect(() => {
    document.title = titleFor(pathname)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
