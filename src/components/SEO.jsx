import { useEffect } from 'react'

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title

    // Meta description
    let descriptionMeta = document.querySelector('meta[name="description"]')

    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.name = 'description'
      document.head.appendChild(descriptionMeta)
    }

    descriptionMeta.setAttribute('content', description)

    // Current page URL
    const canonicalUrl =
      window.location.origin + window.location.pathname

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', canonicalUrl)

    // Open Graph helper
    const setOgMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`)

      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.appendChild(meta)
      }

      meta.setAttribute('content', content)
    }

    setOgMeta('og:title', title)
    setOgMeta('og:description', description)
    setOgMeta('og:url', canonicalUrl)
    setOgMeta('og:image', `${window.location.origin}/og-image.png`)
    setOgMeta('og:type', 'website')
    setOgMeta('og:site_name', 'ZOVIVE')

    // Twitter / X
    const setTwitterMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`)

      if (!meta) {
        meta = document.createElement('meta')
        meta.name = name
        document.head.appendChild(meta)
      }

      meta.setAttribute('content', content)
    }

    setTwitterMeta('twitter:card', 'summary_large_image')
    setTwitterMeta('twitter:title', title)
    setTwitterMeta('twitter:description', description)
    setTwitterMeta(
      'twitter:image',
      `${window.location.origin}/og-image.png`
    )
  }, [title, description])

  return null
}
