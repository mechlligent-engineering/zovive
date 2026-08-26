import { Reveal } from './Reveal.jsx'
import { Button } from './Button.jsx'

export default function CtaSection({
  heading = 'Interested in collaborating?',
  description = "Forest departments, researchers, and infrastructure operators — let's talk about deploying ZOVIVE in the field.",
  ctaLabel = 'Get in touch',
  ctaTo = '/contact',
}) {
  return (
    <section className="relative bg-forest-950 px-6 py-28 md:px-10 md:py-32">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-3xl font-semibold text-mist-50 sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-mist-400">{description}</p>
        <div className="mt-9">
          <Button to={ctaTo}>{ctaLabel}</Button>
        </div>
      </Reveal>
    </section>
  )
}
