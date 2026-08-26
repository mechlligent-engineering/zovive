import { Reveal } from '../components/Reveal.jsx'
import ContactDetails from '../components/contact/ContactDetails.jsx'
import CtaSection from '../components/CtaSection.jsx'

export default function ReachUs() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        {/* PLACEHOLDER IMAGE: wide contact/office/field photo — used as a subtle textured
            background behind this whole section, will be heavily dark-overlaid so exact content
            matters less than mood/texture. Recommended: wide landscape orientation, 1920x1080 or
            larger. */}
        <div className="bg-scanlines absolute inset-0 bg-forest-900/30" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/85 to-forest-950"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16">
          <Reveal direction="right">
            <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
              Contact
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold text-mist-50 sm:text-5xl">
              Contact Details
            </h1>
            <p className="mt-5 text-base leading-relaxed text-mist-400 sm:text-lg">
              Reach us directly using the details below.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-400">
              We're a small, focused team building ZOVIVE from Kerala, India. Whether it's a
              partnership inquiry, a pilot proposal, or just a question, reach out through any of
              the channels here.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <ContactDetails />
          </Reveal>
        </div>
      </section>

      <div className="relative bg-forest-950 px-6 pb-24 md:px-10">
        <Reveal className="mx-auto max-w-2xl border-t border-signal-500/10 pt-10 text-center">
          <p className="text-sm leading-relaxed text-mist-400">
            An initiative of <span className="text-mist-50">Mechlligent Engineering Pvt. Ltd.</span>
          </p>
        </Reveal>
      </div>

      <CtaSection
        heading="Prefer to send a message instead?"
        description="Fill out the full contact form and we'll get back to you shortly."
        ctaLabel="Get in touch"
        ctaTo="/contact"
      />
    </>
  )
}
