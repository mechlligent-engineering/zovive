// Neutral placeholder for a future photo/illustration slot. Swap the div's
// contents for an <img> once real assets are available — layout/sizing is
// controlled entirely via `className` from the call site.
export default function ImagePlaceholder({ className = '', label = 'Image placeholder' }) {
  return (
    <div
      className={`bg-scanlines flex items-center justify-center gap-2 border-2 border-dashed border-signal-500/25 bg-forest-900/50 ${className}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-500/40" />
      <span className="font-display text-xs tracking-wide text-mist-400/60">{label}</span>
    </div>
  )
}
