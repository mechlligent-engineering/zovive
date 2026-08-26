export const PIPELINE_STAGES = [
  {
    id: 'detect',
    index: '01',
    title: 'Detect',
    description: 'Sensors, cameras, and fence lines continuously watch for movement and anomalies in the field.',
  },
  {
    id: 'identify',
    index: '02',
    title: 'Identify',
    description: 'Computer vision models classify the source — species, vehicle, or breach — in near real time.',
  },
  {
    id: 'analyse',
    index: '03',
    title: 'Analyse',
    description: 'Signals are cross-referenced against terrain, history, and behaviour patterns to assess risk.',
  },
  {
    id: 'alert',
    index: '04',
    title: 'Alert',
    description: 'Verified events are routed instantly to field teams and control rooms, with false positives filtered out.',
  },
  {
    id: 'respond',
    index: '05',
    title: 'Respond',
    description: 'Ground and drone response is coordinated with clear, actionable guidance — not just raw data.',
  },
]
