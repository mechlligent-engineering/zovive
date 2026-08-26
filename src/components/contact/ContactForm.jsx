import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../Reveal.jsx'
import { Button } from '../Button.jsx'

const SUBJECT_OPTIONS = ['General Inquiry', 'Partnership', 'Pilot Deployment', 'Media', 'Other']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fieldClasses =
  'w-full rounded-xl border border-signal-500/15 bg-forest-900/40 px-4 py-3 text-sm text-mist-50 placeholder:text-mist-400/50 transition-all duration-300 focus:border-signal-400 focus:outline-none focus:shadow-[0_0_0_3px_rgba(31,191,163,0.18)]'

const labelClasses = 'font-display mb-2 block text-xs font-medium tracking-wide text-mist-400 uppercase'

function ChevronIcon(props) {
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
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

const initialValues = { name: '', email: '', organisation: '', subject: SUBJECT_OPTIONS[0], message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const setField = (field) => (e) => {
    const value = e.target.value
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!EMAIL_RE.test(values.email.trim())) next.email = 'Enter a valid email address.'
    if (!values.message.trim()) next.message = 'Please add a short message.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 700)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
  }

  return (
    <Reveal direction="right">
      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start rounded-2xl border border-signal-500/20 bg-forest-900/40 p-8 md:p-10"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-signal-400/40 bg-signal-500/10 text-signal-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <h3 className="font-display mt-5 text-xl font-semibold text-mist-50">
            Thanks — we'll be in touch soon.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mist-400">
            We've received your message and will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={reset}
            className="focus-ring mt-6 font-display text-xs font-medium tracking-wide text-signal-400 underline decoration-signal-400/40 underline-offset-4 transition-colors hover:text-signal-300"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Name
            </label>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={setField('name')}
              className={fieldClasses}
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={setField('email')}
              className={fieldClasses}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="organisation" className={labelClasses}>
              Organisation <span className="normal-case text-mist-400/50">(optional)</span>
            </label>
            <input
              id="organisation"
              type="text"
              value={values.organisation}
              onChange={setField('organisation')}
              className={fieldClasses}
              placeholder="Your organisation"
            />
          </div>

          <div>
            <label htmlFor="subject" className={labelClasses}>
              Subject
            </label>
            <div className="relative">
              <select
                id="subject"
                value={values.subject}
                onChange={setField('subject')}
                className={`${fieldClasses} appearance-none pr-10`}
              >
                {SUBJECT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-forest-900 text-mist-50">
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist-400" />
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={setField('message')}
              className={`${fieldClasses} resize-none`}
              placeholder="Tell us a bit about what you have in mind."
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={status === 'submitting'}
            className="mt-2 self-start disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </Button>
        </form>
      )}
    </Reveal>
  )
}
