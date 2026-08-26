import { Reveal } from '../Reveal.jsx'

export default function MissionStatement() {
  return (
    <section className="bg-scanlines relative overflow-hidden bg-forest-950 px-6 py-32 md:px-10 md:py-44">
      <div className="bg-noise-fade pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-500/10 blur-[100px]" />

      <Reveal className="relative mx-auto max-w-5xl text-center">
        <p className="font-display text-2xl font-medium leading-snug text-mist-400 sm:text-3xl md:text-4xl">
          ZOVIVE is not simply a wildlife camera company.
        </p>
        <p className="font-display text-glow mt-4 text-3xl font-semibold leading-snug text-signal-400 sm:text-4xl md:text-5xl">
          It is building an integrated protection and monitoring ecosystem —
          <span className="text-mist-50"> for people, wildlife, and the infrastructure between them.</span>
        </p>
      </Reveal>
    </section>
  )
}
