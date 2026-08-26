import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '../Reveal.jsx'
import { PIPELINE_STAGES } from '../../data/pipeline.js'

function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

export default function ApproachStepper() {
  const [active, setActive] = useState(0)
  const count = PIPELINE_STAGES.length

  return (
    <section className="relative bg-forest-950 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            Our Approach
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            A five-stage detection pipeline
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist-400">
            Every alert ZOVIVE surfaces has moved through the same disciplined chain — from raw
            signal to a coordinated response.
          </p>
        </Reveal>

        {/* Desktop / tablet: horizontal flowchart */}
        <Reveal delay={0.15} className="mt-20 hidden md:block">
          <div className="relative">
            {/* base line + continuous idle pulse, always running to suggest a live pipeline */}
            <svg
              viewBox="0 0 1000 4"
              preserveAspectRatio="none"
              className="absolute left-0 top-7 h-px w-full"
            >
              <line x1="0" y1="2" x2="1000" y2="2" stroke="var(--color-signal-500)" strokeOpacity="0.18" strokeWidth="2" />
              <line
                x1="0"
                y1="2"
                x2="1000"
                y2="2"
                stroke="var(--color-signal-400)"
                strokeWidth="2"
                strokeDasharray="130 1000"
                className="animate-signal-travel"
              />
            </svg>

            <div className="relative grid grid-cols-5 gap-4">
              {PIPELINE_STAGES.map((stage, i) => (
                <div key={stage.id} className="relative flex flex-col items-center">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="focus-ring group flex flex-col items-center gap-4 rounded-2xl py-2"
                  >
                    <span className="relative flex h-14 w-14 items-center justify-center">
                      {active !== i && (
                        <span
                          className="animate-pulse-slow absolute inset-1 rounded-full bg-signal-500/10 blur-sm"
                          style={{ animationDelay: `${i * 0.35}s` }}
                        />
                      )}
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                        className={`relative flex h-14 w-14 items-center justify-center rounded-full border font-display text-sm font-medium transition-all duration-300 ${
                          active === i
                            ? 'border-signal-400 bg-signal-500/15 text-signal-300 shadow-[0_0_24px_2px_rgba(31,191,163,0.45)]'
                            : 'border-mist-400/25 bg-forest-900 text-mist-400 group-hover:border-signal-500/50'
                        }`}
                      >
                        {stage.index}
                      </motion.span>
                    </span>
                    <span
                      className={`font-display text-sm tracking-wide transition-colors ${
                        active === i ? 'text-mist-50' : 'text-mist-400 group-hover:text-mist-50'
                      }`}
                    >
                      {stage.title}
                    </span>
                  </button>

                  {i < count - 1 && (
                    <ChevronIcon className="pointer-events-none absolute left-full top-5 h-4 w-4 -translate-x-1/2 text-signal-500/50" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* pointer, aligned to the active node via the same 5-column grid */}
          <div className="grid grid-cols-5">
            {PIPELINE_STAGES.map((stage, i) => (
              <div key={stage.id} className="flex justify-center">
                {active === i && (
                  <motion.div
                    layoutId="approach-pointer"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="mt-4 h-3 w-3 rotate-45 border-l border-t border-signal-400 bg-forest-900"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="relative -mt-1.5 min-h-[100px] overflow-hidden rounded-2xl border border-signal-500/15 bg-forest-900/40 px-8 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display text-sm font-medium tracking-wide text-signal-400">
                  {PIPELINE_STAGES[active].index} — {PIPELINE_STAGES[active].title}
                </p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-mist-50/90">
                  {PIPELINE_STAGES[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Mobile: vertical flowchart / accordion */}
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
              {PIPELINE_STAGES.map((stage, i) => {
                const isActive = active === i
                return (
                  <div key={stage.id} className="relative">
                    <span className="absolute -left-9 top-1 flex h-8 w-8 items-center justify-center">
                      {!isActive && (
                        <span
                          className="animate-pulse-slow absolute inset-0.5 rounded-full bg-signal-500/10 blur-sm"
                          style={{ animationDelay: `${i * 0.35}s` }}
                        />
                      )}
                      <motion.span
                        whileTap={{ scale: 0.94 }}
                        className={`relative flex h-8 w-8 items-center justify-center rounded-full border font-display text-xs font-medium transition-all duration-300 ${
                          isActive
                            ? 'border-signal-400 bg-signal-500/15 text-signal-300 shadow-[0_0_16px_1px_rgba(31,191,163,0.4)]'
                            : 'border-mist-400/25 bg-forest-900 text-mist-400'
                        }`}
                      >
                        {stage.index}
                      </motion.span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActive(isActive ? -1 : i)}
                      className="focus-ring w-full rounded-xl border border-signal-500/10 bg-forest-900/40 px-4 py-3 text-left"
                    >
                      <span
                        className={`font-display text-sm tracking-wide ${isActive ? 'text-signal-300' : 'text-mist-50'}`}
                      >
                        {stage.title}
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
                            {stage.description}
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
