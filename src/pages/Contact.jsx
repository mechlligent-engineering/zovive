import ContactHero from '../components/contact/ContactHero.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import ContactDetails from '../components/contact/ContactDetails.jsx'
import ClosingStrip from '../components/contact/ClosingStrip.jsx'
import { Reveal } from '../components/Reveal.jsx'
import SEO from '../components/SEO.jsx'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact ZOVIVE | Wildlife Monitoring Solutions"
        description="Contact ZOVIVE to discuss AI-powered wildlife monitoring, field deployments, technology partnerships, pilots, and wildlife conflict mitigation solutions."
      />

      <ContactHero />

      <section className="relative bg-forest-950 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:gap-14">
          <ContactForm />
          <Reveal direction="left">
            <ContactDetails />
          </Reveal>
        </div>
      </section>

      <ClosingStrip />
    </>
  )
}
