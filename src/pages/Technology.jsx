import PageHeader from '../components/PageHeader.jsx'
import ProductSection from '../components/technology/ProductSection.jsx'
import ArchitectureFlow from '../components/technology/ArchitectureFlow.jsx'
import CtaSection from '../components/CtaSection.jsx'
import SEO from '../components/SEO.jsx'
import { PRODUCTS } from '../data/products.js'
import { PRODUCT_IMAGES } from '../data/productImages.js'

export default function Technology() {
  return (
    <>
      <SEO
        title="Wildlife Monitoring Technology | ZOVIVE"
        description="Explore ZOVIVE's AI-powered wildlife monitoring and protection technology, including intelligent detection, field monitoring, alerts, and connected conservation systems."
      />

      <PageHeader
        eyebrow="Technology"
        title="Our Technology"
        description="A modular protection and monitoring ecosystem — six connected product families working as one system."
      />

      {PRODUCTS.map((product, i) => (
        <ProductSection
          key={product.id}
          product={product}
          image={PRODUCT_IMAGES[product.id]}
          index={i}
        />
      ))}

      <ArchitectureFlow />

      <CtaSection
        heading="Want to learn more about deploying ZOVIVE at your site?"
        description="Talk to us about pilots, integrations, and what it takes to bring ZOVIVE's detection pipeline to your landscape."
        ctaLabel="Partner With Us"
        ctaTo="/collaborate"
      />
    </>
  )
}
