import { Reveal } from '../Reveal.jsx'
import IndiaMap from './IndiaMap.jsx'

export default function IndiaFirst() {
  return (
    <section className="relative overflow-hidden bg-forest-900/30 px-6 py-28 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <Reveal direction="right">
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            Where We Start
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            India-first, globally relevant
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-mist-400">
ZOVIVE is being built and field-tested across India's most intense human-wildlife conflict corridors — spanning Kerala, Karnataka, Assam, and Odisha. The same detection pipeline generalises to any landscape where people, wildlife, and infrastructure meet.
          </p>
        </Reveal>

        <Reveal direction="left" className="flex flex-col items-center">
          <IndiaMap />
        </Reveal>
      </div>
    </section>
  )
}
