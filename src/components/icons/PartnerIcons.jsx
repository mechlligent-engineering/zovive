const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function BuildingIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <rect x="7" y="6" width="18" height="22" rx="1.5" />
      <path d="M11 11h2M15 11h2M19 11h2M11 15h2M15 15h2M19 15h2M11 19h2M15 19h2M19 19h2" />
      <path d="M13 28v-5a3 3 0 0 1 6 0v5" />
    </svg>
  )
}

function LeafIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M8 24c-2-8 2-16 16-16 1 12-6 18-16 16Z" />
      <path d="M9 23c3-4 7-8 13-13" opacity="0.6" />
    </svg>
  )
}

function GraduationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M4 12 16 6l12 6-12 6-12-6Z" />
      <path d="M10 15v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6" />
      <path d="M28 12v7" />
    </svg>
  )
}

function HeartPulseIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M16 27c-6-4.2-11-8.6-11-14a6.2 6.2 0 0 1 11-3.8A6.2 6.2 0 0 1 27 13c0 5.4-5 9.8-11 14Z" />
      <path d="M9 14h3l1.5-3 2 5 1.5-2h5" opacity="0.7" />
    </svg>
  )
}

function ChipIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <rect x="9" y="9" width="14" height="14" rx="2" />
      <rect x="13" y="13" width="6" height="6" />
      <path d="M13 4v4M19 4v4M13 24v4M19 24v4M4 13h4M4 19h4M24 13h4M24 19h4" />
    </svg>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M13 19l6-6" />
      <path d="M14 9.5 16 7.4a4.6 4.6 0 0 1 6.5 6.5L20.4 16" />
      <path d="M18 22.5 16 24.6a4.6 4.6 0 0 1-6.5-6.5L11.6 16" />
    </svg>
  )
}

function RocketIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M16 4c4 2 7 7 6.5 13.5C18 19 13 19 9.5 17.5 9 11 12 6 16 4Z" />
      <circle cx="16" cy="12" r="2" />
      <path d="M11 20c-3 1-4 4-4 7 3 0 6-1 7-4" />
      <path d="M21 20c3 1 4 4 4 7-3 0-6-1-7-4" />
    </svg>
  )
}

function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M16 29c6-7 10-12.4 10-17a10 10 0 0 0-20 0c0 4.6 4 10 10 17Z" />
      <circle cx="16" cy="12" r="3.4" />
    </svg>
  )
}

function TrendingIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M4 22 12 14l5 5 11-11" />
      <path d="M22 8h6v6" />
    </svg>
  )
}

function BridgeIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M4 18c4-6 20-6 24 0" />
      <path d="M4 18v6M10 18v6M16 18v6M22 18v6M28 18v6" />
      <path d="M2 24h28" />
    </svg>
  )
}

export const PARTNER_ICONS = {
  building: BuildingIcon,
  leaf: LeafIcon,
  graduation: GraduationIcon,
  heartPulse: HeartPulseIcon,
  chip: ChipIcon,
  link: LinkIcon,
  rocket: RocketIcon,
  mapPin: MapPinIcon,
  trending: TrendingIcon,
  bridge: BridgeIcon,
}
