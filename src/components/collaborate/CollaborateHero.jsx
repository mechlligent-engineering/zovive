import { motion } from 'framer-motion'
import { Reveal } from '../Reveal.jsx'
import ImagePlaceholder from '../ImagePlaceholder.jsx'
import collaborateHeroImg from '../../assets/collaborate-hero.png'
export default function CollaborateHero() {
  return (
    <section className="bg-scanlines relative overflow-hidden bg-forest-950 px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
      <div className="bg-noise-fade pointer-events-none absolute inset-0" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-signal-500/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            Collaborate
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display mt-4 text-4xl font-semibold text-mist-50 sm:text-5xl">
            Collaborate With Us
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist-400 sm:text-lg">
            ZOVIVE is open to collaboration with organisations that can contribute to technology
            development, field validation, deployment or market access.
          </p>
        </Reveal>
      </div>

      {/* IMAGE: full-width field/collaboration photo */}
      <Reveal delay={0.24} className="relative mx-auto mt-14 max-w-6xl">
<img
  src={collaborateHeroImg}
  alt="ZOVIVE field collaboration"
  className="aspect-[21/9] w-full rounded-2xl object-cover"
/>
      </Reveal>
    </section>
  )
}
