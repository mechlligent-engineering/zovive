import { motion } from 'framer-motion'

const NEGATIVES = [
  'ZOVIVE is not simply a wildlife camera company.',
  'It is not simply an electric-fence company.',
  'It is not simply a drone company.',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3, delayChildren: 0.1 } },
}

const line = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function OurPosition() {
  return (
    <section className="bg-scanlines relative overflow-hidden bg-forest-950 px-6 py-28 md:px-10 md:py-40">
      <div className="bg-noise-fade pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-xs font-medium tracking-[0.3em] text-signal-400 uppercase"
        >
          Our Position
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-6 flex flex-col gap-2"
        >
          {NEGATIVES.map((text) => (
            <motion.p
              key={text}
              variants={line}
              className="font-display text-xl font-medium leading-snug text-mist-400 sm:text-2xl md:text-3xl"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-glow mt-10 text-3xl font-semibold leading-snug text-signal-400 sm:text-4xl md:text-5xl"
        >
          ZOVIVE is building an integrated protection and monitoring technology ecosystem
          <span className="text-mist-50">
            {' '}
            for human–wildlife conflict and intelligent field safety.
          </span>
        </motion.p>
      </div>
    </section>
  )
}
