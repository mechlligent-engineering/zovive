import { Reveal } from './Reveal.jsx'
import { Button } from './Button.jsx'

export default function PagePlaceholder({ label, description }) {
  return (
    <section className="bg-scanlines relative flex min-h-screen items-center justify-center overflow-hidden bg-forest-950 px-6">
      <div className="bg-noise-fade pointer-events-none absolute inset-0" />
      <Reveal className="relative mx-auto max-w-xl text-center">
        <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
          Coming soon
        </p>
        <h1 className="font-display mt-4 text-4xl font-semibold text-mist-50 sm:text-5xl">
          {label}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-mist-400">{description}</p>
        <div className="mt-10 flex justify-center">
          <Button to="/">Back to Home</Button>
        </div>
      </Reveal>
    </section>
  )
}
