import logo from '../assets/logo.png'

export function LogoMark({ className = 'h-9 w-9' }) {
  return <img src={logo} alt="ZOVIVE" className={className} />
}

export function Logo({ className = '', markClassName = 'h-9 w-9', wordmarkClassName = 'text-lg' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span
        className={`font-display font-semibold tracking-[0.22em] text-mist-50 ${wordmarkClassName}`}
      >
        ZOVIVE
      </span>
    </span>
  )
}
