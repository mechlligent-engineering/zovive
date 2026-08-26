import PageHeader from '../components/PageHeader.jsx'
import MissionVision from '../components/about/MissionVision.jsx'
import OurPosition from '../components/about/OurPosition.jsx'
import EngineeringLed from '../components/about/EngineeringLed.jsx'
import ResponsibleInnovation from '../components/about/ResponsibleInnovation.jsx'
import DevelopmentStatus from '../components/about/DevelopmentStatus.jsx'
import ParentCompanyNote from '../components/about/ParentCompanyNote.jsx'
import CtaSection from '../components/CtaSection.jsx'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About ZOVIVE"
        description="Building the connective layer between people, wildlife, and infrastructure — through detection, not confrontation."
      />
      <MissionVision />
      <OurPosition />
      <EngineeringLed />
      <ResponsibleInnovation />
      <DevelopmentStatus />
      <ParentCompanyNote />
      <CtaSection
        heading="Interested in ZOVIVE's approach?"
        description="Talk to us about pilots, partnerships, and what responsible, technology-led wildlife conflict mitigation looks like at your site."
        ctaLabel="Partner With Us"
        ctaTo="/collaborate"
      />
    </>
  )
}
