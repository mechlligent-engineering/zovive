import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '../Reveal.jsx'
import { ARCHITECTURE_NODES } from '../../data/architecture.js'
import { ARCHITECTURE_ICONS } from '../icons/ArchitectureIcons.jsx'
import { PRODUCT_ICONS } from '../icons/ProductIcons.jsx'

const ICONS = { ...ARCHITECTURE_ICONS, dashboard: PRODUCT_ICONS.dashboard }

export default function ArchitectureFlow() {
  const [active, setActive] = useState(0)
  const count = ARCHITECTURE_NODES.length

  return (
    <section className="relative bg-forest-900/30 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            System Architecture
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            From field signal to operator dashboard
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist-400">
            Every product feeds the same pipeline — data flows from field devices through
            processing and storage to the people who act on it.
          </p>
        </Reveal>

        {/* Desktop / tablet: horizontal flow */}
        <Reveal delay={0.15} className="mt-20 hidden md:block">
          <div className="relative">
            <svg
              viewBox="0 0 1000 4"
              preserveAspectRatio="none"
              className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
            >
              <line x1="0" y1="2" x2="1000" y2="2" stroke="var(--color-signal-500)" strokeOpacity="0.18" strokeWidth="2" />
              <line
                x1="0"
                y1="2"
                x2="1000"
                y2="2"
                stroke="var(--color-signal-400)"
                strokeWidth="2"
                strokeDasharray="140 1000"
                className="animate-signal-travel"
              />
            </svg>

            <div className="relative grid" style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}>
              {ARCHITECTURE_NODES.map((node, i) => {
                const Icon = ICONS[node.icon]
                const isActive = active === i
                return (
                  <button
                    key={node.id}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="focus-ring group flex flex-col items-center gap-3 rounded-2xl px-1 py-2"
                  >
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? 'border-signal-400 bg-signal-500/15 text-signal-300 shadow-[0_0_24px_2px_rgba(31,191,163,0.4)]'
                          : 'border-mist-400/25 bg-forest-900 text-mist-400 group-hover:border-signal-500/50'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span
                      className={`text-center font-display text-xs tracking-wide transition-colors sm:text-sm ${
                        isActive ? 'text-mist-50' : 'text-mist-400 group-hover:text-mist-50'
                      }`}
                    >
                      {node.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative mt-10 min-h-[92px] overflow-hidden rounded-2xl border border-signal-500/15 bg-forest-950/60 px-8 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display text-sm font-medium tracking-wide text-signal-400">
                  {ARCHITECTURE_NODES[active].title} — {ARCHITECTURE_NODES[active].short}
                </p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-mist-50/90">
                  {ARCHITECTURE_NODES[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Mobile: vertical flow / accordion */}
        <div className="mt-14 md:hidden">
          <div className="relative pl-9">
            <svg
              viewBox="0 0 4 1000"
              preserveAspectRatio="none"
              className="absolute left-[15px] top-0 h-full w-px"
            >
              <line x1="2" y1="0" x2="2" y2="1000" stroke="var(--color-signal-500)" strokeOpacity="0.18" strokeWidth="2" />
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="1000"
                stroke="var(--color-signal-400)"
                strokeWidth="2"
                strokeDasharray="90 400"
                className="animate-signal-travel-v"
              />
            </svg>

            <div className="flex flex-col gap-3">
              {ARCHITECTURE_NODES.map((node, i) => {
                const Icon = ICONS[node.icon]
                const isActive = active === i
                return (
                  <div key={node.id} className="relative">
                    <span
                      className={`absolute -left-9 top-1 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? 'border-signal-400 bg-signal-500/15 text-signal-300 shadow-[0_0_16px_1px_rgba(31,191,163,0.4)]'
                          : 'border-mist-400/25 bg-forest-900 text-mist-400'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <button
                      type="button"
                      onClick={() => setActive(isActive ? -1 : i)}
                      className="focus-ring w-full rounded-xl border border-signal-500/10 bg-forest-950/40 px-4 py-3 text-left"
                    >
                      <span
                        className={`font-display text-sm tracking-wide ${isActive ? 'text-signal-300' : 'text-mist-50'}`}
                      >
                        {node.title}
                      </span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-2 text-sm leading-relaxed text-mist-400"
                          >
                            {node.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
