import { motion } from 'framer-motion'
import { Reveal, RevealGroup, revealItem } from '../Reveal.jsx'
import { RESPONSIBLE_PRINCIPLES } from '../../data/about.js'

function CheckIcon(props) {
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
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  )
}

export default function ResponsibleInnovation() {
  return (
    <section className="relative bg-forest-900/20 px-6 py-28 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            Responsible Innovation
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            Principles that shape every deployment
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESPONSIBLE_PRINCIPLES.map((principle) => (
            <motion.div
              key={principle.title}
              variants={revealItem}
              className="flex items-start gap-3 rounded-2xl border border-signal-500/12 bg-forest-900/40 p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-signal-500/30 text-signal-400">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-sm leading-relaxed text-mist-50/90">{principle.title}</p>
                {principle.detail && (
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">{principle.detail}</p>
                )}
              </div>
            </motion.div>
          ))}
        </RevealGroup>

        <motion.p
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-glow mx-auto mt-16 max-w-3xl text-center text-2xl font-semibold leading-snug text-signal-400 sm:text-3xl"
        >
          The objective is not to eliminate wildlife from human environments.
          <span className="text-mist-50">
            {' '}
            The objective is to create safer ways for people, wildlife and infrastructure to
            coexist.
          </span>
        </motion.p>
      </div>
    </section>
  )
}
