import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Reveal, RevealGroup, revealItem } from '../Reveal.jsx'
import { PRODUCTS } from '../../data/products.js'
import { PRODUCT_ICONS } from '../icons/ProductIcons.jsx'
import { PRODUCT_IMAGES } from '../../data/productImages.js'

export default function ProductGrid() {
  return (
    <section className="relative overflow-hidden bg-forest-950 px-6 py-28 md:px-10 md:py-36">
      {/* PLACEHOLDER IMAGE: Wide aerial or landscape shot of forest/farmland/wildlife corridor —
          used as a subtle textured background, will be heavily dark-overlaid so exact content
          matters less than mood/texture. Recommended: wide landscape orientation, 1920x1080 or
          larger. */}
      <div className="bg-scanlines absolute inset-0 bg-forest-900/30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/85 to-forest-950"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            The Platform
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            One ecosystem, six capabilities
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => {
            const Icon = PRODUCT_ICONS[product.icon]
            return (
              <motion.div key={product.id} variants={revealItem}>
                <Link
                  to={`/technology#${product.id}`}
                  className="focus-ring group relative block h-full overflow-hidden rounded-2xl border border-signal-500/12 bg-forest-900/40"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.08, zIndex: 10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="relative h-full"
                  >
                    <img
                      src={PRODUCT_IMAGES[product.id]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 to-forest-950/90" />

                    <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 shadow-[0_18px_40px_-12px_rgba(31,191,163,0.45)] transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative p-8">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-signal-500/25 bg-signal-500/5 text-signal-400 transition-colors duration-300 group-hover:border-signal-400/60 group-hover:text-signal-300">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="font-display mt-5 text-lg font-medium text-mist-50">
                        {product.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist-400">
                        {product.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 font-display text-xs font-medium tracking-wide text-signal-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Learn more
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
