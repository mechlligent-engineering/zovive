import { Link } from 'react-router-dom'
import { LogoMark } from '../components/Logo.jsx'
import { NAV_LINKS } from '../data/nav.js'
import { PRODUCTS } from '../data/products.js'

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.53 17.52 2 12 2S2 6.53 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.95 8.44-9.94Z" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
    </svg>
  )
}

// PLACEHOLDER: update to the real ZOVIVE social profile URLs once available
const SOCIALS = [
  { label: 'Facebook', href: 'https://facebook.com/zovive', Icon: FacebookIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/zovive', Icon: LinkedInIcon },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-signal-500/10 bg-forest-950">
      <div className="bg-scanlines absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[90rem] px-6 py-16 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <LogoMark className="h-10 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-mist-400">
              An initiative of{' '}
              <span className="text-mist-50/80">Mechlligent Engineering Pvt. Ltd.</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-mist-400/50">
              Detect earlier. Understand better. Respond responsibly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-display text-xs font-medium tracking-[0.18em] text-signal-400/80 uppercase">
                Navigate
              </p>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="focus-ring text-sm text-mist-400 transition-colors hover:text-mist-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-xs font-medium tracking-[0.18em] text-signal-400/80 uppercase">
                Technology
              </p>
              <ul className="mt-4 space-y-3">
                {PRODUCTS.map((product) => (
                  <li key={product.id}>
                    <Link
                      to={`/technology#${product.id}`}
                      className="focus-ring text-sm text-mist-400 transition-colors hover:text-mist-50"
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-xs font-medium tracking-[0.18em] text-signal-400/80 uppercase">
                Contact
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:john.joseph@zovive.com"
                    className="focus-ring text-sm text-mist-400 transition-colors hover:text-mist-50"
                  >
                    john.joseph@zovive.com
                  </a>
                </li>
                <li>
                  <span className="text-sm text-mist-400/70">Palarivattom, Kochi, Kerala 682025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-6 border-t border-signal-500/10 pt-6 sm:grid-cols-3">
          <p className="text-center text-xs text-mist-400/60 sm:text-left">
            © {new Date().getFullYear()} Mechlligent Engineering Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-signal-500/20 text-mist-400 transition-all duration-300 hover:border-signal-400/60 hover:text-signal-300 hover:shadow-[0_0_16px_1px_rgba(31,191,163,0.35)]"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <p className="text-center font-display text-xs tracking-[0.18em] text-mist-400/50 uppercase sm:text-right">
            Detect · Identify · Analyse · Alert · Respond
          </p>
        </div>
      </div>
    </footer>
  )
}
