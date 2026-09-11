import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'
import { LogoMark } from '../Logo.jsx'

const EASE = [0.16, 1, 0.3, 1]
const SPRING = { type: 'spring', stiffness: 260, damping: 20, mass: 0.8 }

// logo.png is a single flattened 1987x640 image: the shield icon occupies
// the left ~29% of its width and the wordmark the remaining ~69%, with a
// small transparent gap between them. Both crop pieces are sized as a
// percentage of the SAME box that the final `LogoMark` renders into (rather
// than each being independently aspect-ratio-sized plus a flex `gap`, which
// left a few px of drift between the assembled width and LogoMark's real
// width) — this guarantees the assembled pieces and the plain static logo
// occupy the exact same box, so crossfading between them is invisible
// instead of a visible resize/jump.
const ICON_CROP_PX = 575
const WORD_CROP_PX = 620
const IMAGE_WIDTH_PX = 1987
const IMAGE_HEIGHT_PX = 640

const ICON_WIDTH_PCT = (ICON_CROP_PX / IMAGE_WIDTH_PX) * 100
const WORD_LEFT_PCT = (WORD_CROP_PX / IMAGE_WIDTH_PX) * 100
const WORD_WIDTH_PCT = 100 - WORD_LEFT_PCT
// How far the full-size inner image must shift left within the wordmark
// piece (as a % of that piece's own width) so its crop window lines up with
// the source image's wordmark region.
const WORD_PIECE_ASPECT = (IMAGE_WIDTH_PX - WORD_CROP_PX) / IMAGE_HEIGHT_PX
const WORD_INNER_OFFSET_PCT = (WORD_CROP_PX / IMAGE_HEIGHT_PX / WORD_PIECE_ASPECT) * 100

export default function LogoReveal({ className = 'h-24 w-auto md:h-32 md:w-auto' }) {
  // Checked synchronously (not in an effect) so a reduced-motion viewer's
  // very first render already shows the plain static logo — no animated
  // layer ever mounts, no one-frame flash.
  const [reducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [settled, setSettled] = useState(reducedMotion)

  useEffect(() => {
    if (reducedMotion) return
    // Safety net only — the real trigger is the glow's onAnimationComplete
    // below. This just guards against that callback never firing.
    const fallback = setTimeout(() => setSettled(true), 1700)
    return () => clearTimeout(fallback)
  }, [reducedMotion])

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Always-mounted final state. It alone determines this element's box
          size, so the animated layer (absolutely positioned, inset-0) is
          guaranteed to match it exactly — only `opacity` crossfades between
          the two, never a width/height/position change. Hidden until
          `settled` so it doesn't show through the mostly-transparent
          animated layer above it during the assembly phase. */}
      <LogoMark
        className={`block h-full w-auto max-w-none transition-opacity duration-300 ease-out ${
          settled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {!reducedMotion && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0"
          animate={{ opacity: settled ? 0 : 1 }}
          transition={{ duration: 0.35, ease: EASE }}
          style={{ pointerEvents: 'none' }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.85, 0], scale: [0.5, 1.5, 1.7] }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE, times: [0, 0.4, 1] }}
            onAnimationComplete={() => setSettled(true)}
            className="absolute inset-0 -z-10 rounded-full bg-signal-400/40 blur-2xl"
          />

          <motion.span
            className="absolute left-0 top-0 h-full overflow-hidden"
            style={{ width: `${ICON_WIDTH_PCT}%` }}
            initial={{ opacity: 0, scale: 0.55, rotate: -28, x: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
            transition={{ scale: SPRING, rotate: SPRING, x: SPRING, opacity: { duration: 0.3, ease: EASE } }}
          >
            <img src={logo} alt="" className="absolute left-0 top-0 h-full w-auto max-w-none" />
          </motion.span>

          <motion.span
            className="absolute top-0 h-full overflow-hidden"
            style={{ left: `${WORD_LEFT_PCT}%`, width: `${WORD_WIDTH_PCT}%` }}
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.32, duration: 0.55, ease: EASE }}
          >
            <img
              src={logo}
              alt=""
              className="absolute top-0 h-full w-auto max-w-none"
              style={{ left: `-${WORD_INNER_OFFSET_PCT}%` }}
            />
          </motion.span>
        </motion.span>
      )}
    </span>
  )
}
