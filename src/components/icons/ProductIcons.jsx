const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function WildlifeIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M11 13c0-3 2.2-5 5-5s5 2 5 5v6c0 2.2-1.6 4-3.6 4.6" />
      <path d="M11 13c-2.8 0-4.8 2.1-4.8 4.8 0 2.3 1.6 4.1 3.9 4.5" />
      <path d="M16 23.6c0 2.6-1.3 4.9-2.8 6.7" />
      <circle cx="12.6" cy="12.4" r="0.8" fill="currentColor" stroke="none" />
      <path d="M4 9.5C6 7 8.5 6 11 6" opacity="0.6" />
    </svg>
  )
}

function FenceIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M6 12v14M12 12v14M20 12v14M26 12v14" />
      <path d="M4 16h24M4 22h24" />
      <path d="M6 12l0-4M12 12l0-4M20 12l0-4M26 12l0-4" opacity="0.5" />
      <path d="M9 6.5l14 3" stroke="currentColor" opacity="0.9" />
    </svg>
  )
}

function DroneIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <circle cx="16" cy="16" r="3.4" />
      <path d="M13.5 13.5 8 8M18.5 13.5 24 8M13.5 18.5 8 24M18.5 18.5 24 24" />
      <circle cx="8" cy="8" r="2.6" />
      <circle cx="24" cy="8" r="2.6" />
      <circle cx="8" cy="24" r="2.6" />
      <circle cx="24" cy="24" r="2.6" />
    </svg>
  )
}

function SensorIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M16 27V15" />
      <path d="M11 27h10" />
      <circle cx="16" cy="10" r="4.5" />
      <path d="M10 10a6 6 0 0 1 0.6-2.6M22 10a6 6 0 0 1-0.6 2.6" opacity="0.6" />
    </svg>
  )
}

function CameraIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <rect x="4" y="10" width="20" height="14" rx="2.5" />
      <path d="M24 14.5 28.5 12v10L24 19.5" />
      <circle cx="14" cy="17" r="4" />
      <path d="M11 10.5 12.5 7h3l1.5 3.5" />
    </svg>
  )
}

function DashboardIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <rect x="4" y="5" width="24" height="17" rx="2" />
      <path d="M4 10h24" />
      <path d="M9 14v4M14 13v5M19 15v3M24 12v6" />
    </svg>
  )
}

export const PRODUCT_ICONS = {
  wildlife: WildlifeIcon,
  fence: FenceIcon,
  drone: DroneIcon,
  sensor: SensorIcon,
  camera: CameraIcon,
  dashboard: DashboardIcon,
}
