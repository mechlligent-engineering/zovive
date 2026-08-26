import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '../components/Logo.jsx'
import { Button } from '../components/Button.jsx'
import { NAV_LINKS } from '../data/nav.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-950/85 backdrop-blur-md border-b border-signal-500/10 shadow-[0_1px_0_rgba(31,191,163,0.08)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="focus-ring rounded-full" onClick={() => setOpen(false)}>
          <Logo markClassName="h-10 w-10 md:h-11 md:w-11" wordmarkClassName="text-lg md:text-xl" />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `focus-ring group relative font-display text-base tracking-wide transition-colors ${
                  isActive ? 'text-signal-400' : 'text-mist-50/80 hover:text-mist-50'
                }`
              }
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-signal-400 transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
<Button to="/contact" variant="secondary" className="!px-5 !py-2 text-sm">
  Get in touch
</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-mist-50"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="h-px w-6 bg-mist-50"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-mist-50"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-signal-500/10 bg-forest-950/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `focus-ring rounded-lg px-2 py-3 font-display text-lg tracking-wide ${
                      isActive ? 'text-signal-400' : 'text-mist-50/85'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/contact" variant="primary" className="mt-3 w-full" onClick={() => setOpen(false)}>
                Get in touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
