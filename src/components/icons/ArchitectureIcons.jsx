const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function ProductsIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <rect x="5" y="5" width="9" height="9" rx="2" />
      <rect x="18" y="5" width="9" height="9" rx="2" />
      <rect x="5" y="18" width="9" height="9" rx="2" />
      <rect x="18" y="18" width="9" height="9" rx="2" />
    </svg>
  )
}

function TowerIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M16 30V13" />
      <path d="M11 30h10" />
      <path d="M12 13l4-9 4 9" />
      <path d="M14 13h4" opacity="0.6" />
      <path d="M9 10a10 10 0 0 1 14 0" opacity="0.5" />
      <path d="M6 7a14 14 0 0 1 20 0" opacity="0.3" />
    </svg>
  )
}

function ServerIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <rect x="5" y="5" width="22" height="8" rx="2" />
      <rect x="5" y="19" width="22" height="8" rx="2" />
      <circle cx="10" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="10" cy="23" r="0.9" fill="currentColor" stroke="none" />
      <path d="M15 9h8M15 23h8" opacity="0.6" />
    </svg>
  )
}

function DatabaseIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <ellipse cx="16" cy="8" rx="10" ry="3.6" />
      <path d="M6 8v16c0 2 4.5 3.6 10 3.6s10-1.6 10-3.6V8" />
      <path d="M6 16c0 2 4.5 3.6 10 3.6s10-1.6 10-3.6" opacity="0.6" />
    </svg>
  )
}

function OperatorIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <circle cx="16" cy="11" r="5" />
      <path d="M6 28c0-6 4.5-10 10-10s10 4 10 10" />
    </svg>
  )
}

export const ARCHITECTURE_ICONS = {
  products: ProductsIcon,
  tower: TowerIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  operator: OperatorIcon,
}
