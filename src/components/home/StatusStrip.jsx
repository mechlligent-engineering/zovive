import { Reveal } from '../Reveal.jsx'

export default function StatusStrip() {
  return (
    <div className="border-y border-signal-500/10 bg-forest-900/30 px-6 py-4 md:px-10">
      <Reveal className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 text-center sm:justify-start">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-signal-400" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-400" />
        </span>
        <p className="font-display text-xs tracking-wide text-mist-400">
          Currently in prototype / MVP development stage.
        </p>
      </Reveal>
    </div>
  )
}
