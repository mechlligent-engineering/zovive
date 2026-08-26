import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const INTRO_HOLD_MS = 1400

function SpeakerIcon({ muted, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      {muted ? (
        <path d="M16 9l5 6M21 9l-5 6" />
      ) : (
        <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />
      )}
    </svg>
  )
}

function ReplayIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 12a8 8 0 1 1 2.5 5.8" />
      <path d="M4 17v-5h5" />
    </svg>
  )
}

export default function IntroVideo() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const introTimerRef = useRef(null)

  const [inView, setInView] = useState(false)
  const [phase, setPhase] = useState('intro') // 'intro' | 'playing' | 'ended'
  const [muted, setMuted] = useState(true)
  const [showSoundHint, setShowSoundHint] = useState(false)

  // Track whether the section is meaningfully in view.
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Drive the intro hold timer and play/pause based on phase + visibility.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (phase === 'intro') {
      clearTimeout(introTimerRef.current)
      if (inView) {
        introTimerRef.current = setTimeout(() => setPhase('playing'), INTRO_HOLD_MS)
      }
    } else if (phase === 'playing') {
      if (inView) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    }
    // 'ended' is sticky — scrolling away/back doesn't restart it, only the replay button does.

    return () => clearTimeout(introTimerRef.current)
  }, [phase, inView])

  // Briefly hint that the video has sound whenever playback starts.
  useEffect(() => {
    if (phase === 'playing') {
      setShowSoundHint(true)
      const timer = setTimeout(() => setShowSoundHint(false), 3000)
      return () => clearTimeout(timer)
    } else {
      setShowSoundHint(false)
    }
  }, [phase])

  const handleEnded = () => setPhase('ended')

  const handleReplay = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    setPhase('playing')
    video.play().catch(() => {})
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  const showOverlayText = phase === 'intro' || phase === 'ended'

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-[80vh] w-full overflow-hidden bg-forest-950"
    >
      {/* Keep public/videos/zovive-intro.mp4 and zovive-intro-poster.jpg — see public/videos/README.md */}
      <motion.video
        ref={videoRef}
        animate={{ scale: phase === 'intro' ? 1.04 : 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full bg-forest-950 object-contain"
        muted={muted}
        playsInline
        preload="auto"
        poster="/videos/zovive-intro-poster.jpg"
        onEnded={handleEnded}
      >
        <source src="/videos/zovive-intro.mp4" type="video/mp4" />
      </motion.video>

      {/* dim the video once it has finished playing, behind the replay overlay */}
      <div
        className={`pointer-events-none absolute inset-0 bg-forest-950 transition-opacity duration-700 ${
          phase === 'ended' ? 'opacity-40' : 'opacity-0'
        }`}
      />

      <AnimatePresence mode="wait">
        {showOverlayText && (
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 px-6 text-center md:px-10"
          >
            <p className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase">
              See It In Action
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl md:text-5xl">
              How ZOVIVE Works
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-mist-100/90 sm:text-lg">
              A closer look at the detection pipeline, from field sensors to the operator
              dashboard.
            </p>

            {phase === 'intro' && (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="mt-6 flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-signal-400/80 uppercase"
  >
    <span className="text-signal-400">▶</span> Watch the full walkthrough
  </motion.p>
)}

            {phase === 'ended' && (
              <motion.button
                type="button"
                onClick={handleReplay}
                aria-label="Play again"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.08, boxShadow: '0 0 40px 8px rgba(31,191,163,0.65)' }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-signal-500 text-forest-950 shadow-[0_0_32px_6px_rgba(31,191,163,0.55)]"
              >
                <ReplayIcon className="h-7 w-7" />
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col items-center gap-3 md:right-8">
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-signal-500/40 bg-forest-950/60 text-signal-400 backdrop-blur-md transition-all duration-300 hover:border-signal-400 hover:shadow-[0_0_20px_2px_rgba(31,191,163,0.4)]"
        >
          <SpeakerIcon muted={muted} className="h-5 w-5" />
        </button>

        <AnimatePresence>
          {showSoundHint && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="whitespace-nowrap rounded-full border border-signal-500/30 bg-forest-950/80 px-3 py-1.5 text-xs text-mist-100 backdrop-blur-md"
            >
              🔊 Turn on sound
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
