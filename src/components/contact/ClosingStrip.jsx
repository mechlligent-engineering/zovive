import { Link } from 'react-router-dom'
import { Reveal } from '../Reveal.jsx'

export default function ClosingStrip() {
  return (
    <div className="border-t border-signal-500/10 bg-forest-900/20 px-6 py-10 md:px-10">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center">
        <p className="text-sm leading-relaxed text-mist-400">
          Open to collaboration across research, deployment, and technology partnerships.{' '}
          <Link
            to="/collaborate"
            className="focus-ring text-signal-400 underline decoration-signal-400/40 underline-offset-4 transition-colors hover:text-signal-300"
          >
            See how we work together →
          </Link>
        </p>
      </Reveal>
    </div>
  )
}
