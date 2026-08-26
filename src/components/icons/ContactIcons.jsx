const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <rect x="4" y="7" width="24" height="18" rx="2.5" />
      <path d="M5 9l11 8 11-8" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 32 32" {...common} {...props}>
      <path d="M8 5c-2 0-3.5 1.6-3.2 3.6.6 4 2.6 8.3 6 11.7 3.4 3.4 7.7 5.4 11.7 6 2 .3 3.6-1.2 3.6-3.2v-3l-5.5-2-2 2c-2.4-1.2-4.6-3.4-5.8-5.8l2-2-2-5.5H8Z" />
    </svg>
  )
}

export const CONTACT_ICONS = {
  mail: MailIcon,
  phone: PhoneIcon,
}
