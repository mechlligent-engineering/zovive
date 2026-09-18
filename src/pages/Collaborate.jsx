import CollaborateHero from '../components/collaborate/CollaborateHero.jsx'
import PartnerGrid from '../components/collaborate/PartnerGrid.jsx'
import CollaborationModels from '../components/collaborate/CollaborationModels.jsx'
import CtaSection from '../components/CtaSection.jsx'
import SEO from '../components/SEO.jsx'

export default function Collaborate() {
  return (
    <>
      <SEO
        title="Collaborate with ZOVIVE | Wildlife Conservation"
        description="Collaborate with ZOVIVE on wildlife monitoring pilots, field validation, technology integration, and responsible solutions for human-wildlife coexistence."
      />

      <CollaborateHero />
      <PartnerGrid />
      <CollaborationModels />

      <CtaSection
        heading="Let's build safer coexistence, together."
        description="Whether it's field validation, technology integration, or a pilot deployment — we'd like to hear from you."
        ctaLabel="Get in touch"
        ctaTo="/contact"
      />
    </>
  )
}
