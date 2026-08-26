import Hero from '../components/home/Hero.jsx'
import IntroVideo from '../components/home/IntroVideo.jsx'
import Challenge from '../components/home/Challenge.jsx'
import ApproachStepper from '../components/home/ApproachStepper.jsx'
import ProductGrid from '../components/home/ProductGrid.jsx'
import IndiaFirst from '../components/home/IndiaFirst.jsx'
import MissionStatement from '../components/home/MissionStatement.jsx'
import StatusStrip from '../components/home/StatusStrip.jsx'
import CtaSection from '../components/CtaSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroVideo />
      <Challenge />
      <ApproachStepper />
      <ProductGrid />
      <IndiaFirst />
      <MissionStatement />
      <StatusStrip />
      <CtaSection />
    </>
  )
}
