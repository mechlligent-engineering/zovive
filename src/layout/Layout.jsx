import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import BackToTop from './BackToTop.jsx'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const scrollToHash = () => {
        const el = document.getElementById(hash.slice(1))
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return true
        }
        return false
      }
      // section content can mount a tick after route change, so retry once
      if (!scrollToHash()) requestAnimationFrame(() => setTimeout(scrollToHash, 100))
      return
    }
    // Explicit 'instant' overrides the site-wide `scroll-behavior: smooth` (index.css) —
    // without it this inherits smooth scrolling, which can be interrupted by the new
    // page's layout/images settling mid-animation and leave the scroll position stuck.
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <div className="min-h-screen bg-forest-950">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
