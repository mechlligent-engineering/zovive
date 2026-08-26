import { motion } from 'framer-motion'
import { Reveal, RevealGroup, revealItem } from '../Reveal.jsx'
import { PARTNER_GROUPS } from '../../data/collaborate.js'
import { PARTNER_ICONS } from '../icons/PartnerIcons.jsx'
import { PRODUCT_ICONS } from '../icons/ProductIcons.jsx'

const ICONS = { ...PARTNER_ICONS, sensor: PRODUCT_ICONS.sensor, drone: PRODUCT_ICONS.drone }

export default function PartnerGrid() {
  return (
    <section className="relative bg-forest-900/20 px-6 py-28 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            Who We Collaborate With
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            Partners across the ecosystem
          </h2>
        </Reveal>

        {PARTNER_GROUPS.map((group) => (
          <div key={group.label} className="mt-12">
            <p className="font-display text-xs font-medium tracking-[0.25em] text-signal-400/70 uppercase">
              {group.label}
            </p>

            <RevealGroup className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.items.map((partner) => {
                const Icon = ICONS[partner.icon]
                return (
                  <motion.div
                    key={partner.id}
                    variants={revealItem}
                    whileHover={{ y: -3, boxShadow: '0 0 24px -6px rgba(31,191,163,0.35)' }}
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                    className="flex items-center gap-3.5 rounded-xl border border-signal-500/12 bg-forest-900/40 px-4 py-3.5 transition-colors duration-300 hover:border-signal-400/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-signal-500/25 bg-signal-500/5 text-signal-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-medium leading-snug text-mist-50/90">
                      {partner.title}
                    </p>
                  </motion.div>
                )
              })}
            </RevealGroup>
          </div>
        ))}
      </div>
    </section>
  )
}
