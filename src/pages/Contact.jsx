import ContactHero from '../components/contact/ContactHero.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import ContactDetails from '../components/contact/ContactDetails.jsx'
import ClosingStrip from '../components/contact/ClosingStrip.jsx'
import { Reveal } from '../components/Reveal.jsx'

export default function Contact() {
  return (
    <>
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
