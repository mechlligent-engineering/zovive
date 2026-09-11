import { useRef } from 'react'
import { motion } from 'framer-motion'
import RadarField from '../RadarField.jsx'
import LogoReveal from './LogoReveal.jsx'
import { Button } from '../Button.jsx'

const TAGLINE_WORDS = 'Detect earlier. Understand better. Respond responsibly.'.split(' ')

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.5 },
  },
}

const word = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const contentRef = useRef(null)
  const headlineRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-forest-950 px-6 pt-24 md:px-10">
      <RadarField
        avoidRef={contentRef}
        headlineRef={headlineRef}
        subtitleRef={subtitleRef}
        buttonsRef={buttonsRef}
      />

      <div ref={contentRef} className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <div className="mb-8">
          <LogoReveal className="h-16 w-auto max-w-none md:h-20 md:w-auto" />
        </div>

        <motion.h1
          ref={headlineRef}
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display mt-6 flex flex-wrap justify-center gap-x-3 text-3xl font-semibold text-mist-50 sm:text-5xl md:text-6xl"
        >
          {TAGLINE_WORDS.map((w, i) => (
            <motion.span key={i} variants={word} className={i === 2 || i === 3 ? 'text-signal-400 text-glow' : ''}>
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-mist-400 sm:text-lg"
        >
          ZOVIVE combines AI, computer vision, smart sensors, and drones to help people, wildlife, and infrastructure coexist safely.
        </motion.p>

        <motion.div
          ref={buttonsRef}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button to="/technology" variant="primary">
            Explore Technology
          </Button>
          <Button to="/collaborate" variant="secondary">
            Partner With Us
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-mist-400/30 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-signal-400"
          />
        </div>
      </motion.div>
    </section>
  )
}
