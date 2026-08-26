import { motion } from 'framer-motion'
import { Reveal, RevealGroup, revealItem } from '../Reveal.jsx'
import { COLLABORATION_MODELS } from '../../data/collaborate.js'

export default function CollaborationModels() {
  return (
    <section className="relative bg-forest-950 px-6 py-28 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            Collaboration Models
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            Ways we work together
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 flex flex-wrap justify-center gap-3">
          {COLLABORATION_MODELS.map((model) => (
            <motion.span
              key={model}
              variants={revealItem}
              className="inline-flex items-center gap-2 rounded-full border border-signal-500/20 bg-forest-900/40 px-4 py-2 font-display text-xs tracking-wide text-mist-50/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
              {model}
            </motion.span>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
