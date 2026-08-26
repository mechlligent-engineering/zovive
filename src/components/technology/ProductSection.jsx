import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Reveal } from '../Reveal.jsx'

export default function ProductSection({ product, image, index }) {
  const { hash } = useLocation()
  const [isTarget] = useState(() => hash.slice(1) === product.id)
  const reversed = index % 2 === 1

  return (
    <section
      id={product.id}
      className="scroll-mt-24 border-t border-signal-500/8 bg-forest-950 px-6 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal direction={reversed ? 'left' : 'right'} className={reversed ? 'md:order-2' : ''}>
          <div
            className={`bg-scanlines relative overflow-hidden rounded-2xl border border-signal-500/15 bg-forest-900/40 p-5 ${
              isTarget ? 'animate-target-flash' : ''
            }`}
          >

            <img
              src={image}
              alt={product.title}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction={reversed ? 'right' : 'left'}>
          <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
            Product {String(index + 1).padStart(2, '0')}
          </p>
          <h2 className="font-display mt-4 text-2xl font-semibold text-mist-50 sm:text-3xl">
            {product.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist-400">{product.summary}</p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {product.capabilities.map((cap) => (
              <li key={cap} className="flex items-center gap-2.5 text-sm text-mist-50/85">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-400" />
                {cap}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
