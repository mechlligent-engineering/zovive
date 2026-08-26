import { Reveal } from '../Reveal.jsx'

export default function Challenge() {
  return (
    <section className="relative bg-forest-950 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <Reveal direction="right">
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            The Challenge
          </p>

          <p className="font-display mt-6 text-2xl leading-snug font-medium text-mist-50 sm:text-3xl md:text-4xl">
            Fences fail silently. Patrols cover a fraction of the ground. Camera traps, sensors,
            and field reports rarely speak to each other —
            <span className="text-mist-400"> by the time a conflict is confirmed, it has often already happened.</span>
          </p>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <img
            src="/images/fence-boundary.jpeg"
            alt="Fence line at the forest boundary, representing the human-wildlife conflict zone"
            className="aspect-[4/3] w-full rounded-2xl border border-signal-500/15 object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
