import { CONTACT_ICONS } from '../icons/ContactIcons.jsx'
import { PARTNER_ICONS } from '../icons/PartnerIcons.jsx'

const MapPinIcon = PARTNER_ICONS.mapPin

function DetailCard({ Icon, label, value, href, pulse = false }) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-signal-500/12 bg-forest-900/40 p-6 transition-all duration-300 hover:border-signal-400/40 hover:shadow-[0_0_24px_-6px_rgba(31,191,163,0.35)]">
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-signal-500/25 bg-signal-500/5 text-signal-400 transition-colors duration-300 group-hover:border-signal-400/60 group-hover:bg-signal-500/10 group-hover:text-signal-300">
        {pulse && (
          <span className="animate-pulse-slow absolute inset-0 -z-10 rounded-xl bg-signal-500/25 blur-md" />
        )}
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="font-display text-xs font-medium tracking-[0.2em] text-mist-400 uppercase">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="focus-ring mt-1.5 inline-block text-base text-mist-50 underline-offset-4 transition-colors hover:text-signal-300 hover:underline decoration-signal-400/50"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1.5 whitespace-pre-line text-base text-mist-50">{value}</p>
        )}
      </div>
    </div>
  )
}

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-4">
      <DetailCard
        Icon={CONTACT_ICONS.mail}
        label="Email"
        value="john.joseph@zovive.com"
        href="mailto:john.joseph@zovive.com"
      />
      <DetailCard
        Icon={CONTACT_ICONS.phone}
        label="Phone"
        value="+91-9037673860"
        href="tel:+919037673860"
      />
      <DetailCard
        Icon={MapPinIcon}
        label="Location"
        value={'39/2475-B1, Suite F38,\nLR Towers, SJRRA 104, South Janatha Road, Palarivattom\nKochi, Kerala 682025'}
        pulse
      />
    </div>
  )
}
