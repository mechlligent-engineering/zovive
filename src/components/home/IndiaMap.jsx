import indiaMapImg from '../../assets/india-map.png'

// Marker positions are percentages of the container, calibrated against the
// real india-map.png artwork — re-tune if the source image ever changes.
const MARKERS = [
  { id: 'kerala', left: '28%', top: '78%', primary: true, delay: 0 },
  { id: 'karnataka', left: '30%', top: '58%', delay: 0.4 },
  { id: 'odisha', left: '71%', top: '47%', delay: 0.8 },
  { id: 'assam', left: '87%', top: '37%', delay: 1.2 },
]

export default function IndiaMap({ className = '' }) {
  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <div className="absolute inset-0 rounded-full bg-signal-500/10 blur-3xl" />
      <img
        src={indiaMapImg}
        alt="Map of India highlighting Kerala and high-conflict wildlife corridor regions"
        className="aspect-[1536/1690] w-full rounded-xl object-contain"
      />

      {/* marker + label overlay, positioned on top of the image — adjust the percentage
          coordinates above if the source image ever changes */}
      <div className="pointer-events-none absolute inset-0">
        {MARKERS.map((m) => (
          <span
            key={m.id}
            title={m.primary ? 'Kerala — Pilot Region' : 'High-conflict corridor'}
            className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: m.left, top: m.top, width: m.primary ? 10 : 7, height: m.primary ? 10 : 7 }}
          >
            <span
              className="animate-pulse-slow absolute inset-0 rounded-full bg-signal-400"
              style={{ animationDelay: `${m.delay}s`, boxShadow: '0 0 10px 2px rgba(31,191,163,0.5)' }}
            />
            <span
              className="absolute rounded-full bg-mist-50"
              style={{
                width: m.primary ? 4 : 3,
                height: m.primary ? 4 : 3,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </span>
        ))}

        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <line
            x1="29"
            y1="79"
            x2="42"
            y2="87"
            stroke="var(--color-signal-500)"
            strokeOpacity="0.6"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <p
          className="font-display absolute text-[10px] font-semibold tracking-wide whitespace-nowrap text-signal-400"
          style={{ left: '43%', top: '85%' }}
        >
          
        </p>
      </div>
    </div>
  )
}
