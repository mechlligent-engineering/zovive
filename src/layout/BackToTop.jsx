import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function ArrowUpIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ scale: 1.08, boxShadow: '0 0 24px 4px rgba(31,191,163,0.5)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="focus-ring fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-signal-500/40 bg-forest-950/60 text-signal-400 backdrop-blur-md transition-colors duration-300 hover:border-signal-400 md:bottom-8 md:right-8"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
