import { Reveal } from '../Reveal.jsx'

export default function DevelopmentStatus() {
  return (
    <section className="relative bg-forest-950 px-6 py-24 md:px-10 md:py-28">
      <Reveal className="mx-auto max-w-3xl rounded-2xl border border-signal-500/15 bg-forest-900/40 p-8 md:p-10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-signal-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-400" />
          </span>
          <p className="font-display text-xs font-medium tracking-[0.25em] text-signal-400 uppercase">
            Development Status
          </p>
        </div>
        <h2 className="font-display mt-4 text-xl font-semibold text-mist-50 sm:text-2xl">
          Currently in prototype / MVP development stage
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-mist-400 sm:text-base">
          Our current focus is completing and validating our computer-vision and fence-monitoring
          capabilities through structured pilots and reference deployments — building a clear,
          evidence-based path from early pilots to institutional deployments.
        </p>
      </Reveal>
    </section>
  )
}
