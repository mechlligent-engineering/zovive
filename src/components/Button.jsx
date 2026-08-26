import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const base =
  'focus-ring inline-flex items-center justify-center gap-2 rounded-full font-display text-sm font-medium tracking-wide px-7 py-3.5 transition-colors duration-300'

const variants = {
  primary:
    'bg-signal-500 text-forest-950 hover:bg-signal-400 shadow-[0_0_0_0_rgba(31,191,163,0)]',
  secondary:
    'border border-signal-500/50 text-mist-50 hover:border-signal-400 bg-transparent',
}

const glow = {
  primary: '0 0 28px 4px rgba(31,191,163,0.55)',
  secondary: '0 0 22px 2px rgba(31,191,163,0.28)',
}

export const Button = forwardRef(function Button(
  { children, variant = 'primary', to, href, className = '', ...props },
  ref,
) {
  const classes = `${base} ${variants[variant]} ${className}`
  const motionProps = {
    whileHover: { scale: 1.045, boxShadow: glow[variant] },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block rounded-full">
        <Link ref={ref} to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button ref={ref} className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
})
