import { motion } from 'framer-motion'
import { Reveal, RevealGroup, revealItem } from '../Reveal.jsx'
import { ENGINEERING_TAGS } from '../../data/about.js'

export default function EngineeringLed() {
  return (
    <section className="relative bg-forest-950 px-6 py-28 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            Engineering-Led Development
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            Built on Mechlligent Engineering's technical foundation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-400">
            ZOVIVE is developed by Mechlligent Engineering Pvt. Ltd., drawing on capabilities in
            AI and computer vision, embedded systems, wireless technology, software engineering,
            field monitoring, and drone-related research — brought together into one deployable
            technology stack.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 flex flex-wrap justify-center gap-3">
          {ENGINEERING_TAGS.map((tag) => (
            <motion.span
              key={tag}
              variants={revealItem}
              className="inline-flex items-center gap-2 rounded-full border border-signal-500/20 bg-forest-900/40 px-4 py-2 font-display text-sm tracking-wide text-mist-50/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
              {tag}
            </motion.span>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
