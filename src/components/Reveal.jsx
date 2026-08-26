import { motion } from 'framer-motion'

const directions = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
  none: { y: 0, x: 0 },
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  amount = 0.3,
  as = 'div',
  ...props
}) {
  const MotionTag = motion[as] ?? motion.div
  const offset = directions[direction] ?? directions.up

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export function RevealGroup({
  children,
  className = '',
  stagger = 0.12,
  once = true,
  amount = 0.2,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}
