import { Reveal } from '../Reveal.jsx'

export default function MissionVision() {
  return (
    <section className="relative bg-forest-900/20 px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <Reveal direction="right">
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            Mission
          </p>
          <p className="font-display mt-4 text-2xl font-medium leading-snug text-mist-50 sm:text-3xl">
            To develop intelligent, ethical and practical technologies that help people, wildlife,
            agriculture and infrastructure coexist more safely.
          </p>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            Vision
          </p>
          <p className="font-display mt-4 text-2xl font-medium leading-snug text-mist-50 sm:text-3xl">
            A future where human–wildlife conflict is prevented through timely detection,
            connected intelligence and responsible intervention.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
