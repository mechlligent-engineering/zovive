export const ARCHITECTURE_NODES = [
  {
    id: 'products',
    icon: 'products',
    title: 'Products',
    short: 'Field devices',
    description: 'Cameras, fence sensors, drones, and environmental sensors capture raw signals at the edge.',
  },
  {
    id: 'base-station',
    icon: 'tower',
    title: 'Base Station',
    short: 'Field infrastructure',
    description:
      'The Base Station operates independently on-site — continuing to capture and process data with no internet connection — and syncs to the cloud once connectivity is available.',
  },
  {
    id: 'central-backend',
    icon: 'server',
    title: 'Central Backend',
    short: 'Processing layer',
    description: 'Detection events are validated, enriched, and processed by the ZOVIVE backend in near real time.',
  },
  {
    id: 'postgresql',
    icon: 'database',
    title: 'PostgreSQL',
    short: 'Data store',
    description: 'Every event, device reading, and alert is persisted in a structured, queryable data store.',
  },
  {
    id: 'admin-platform',
    icon: 'dashboard',
    title: 'Admin Platform',
    short: 'Control layer',
    description: 'The administration platform surfaces detections, device health, and system status in one place.',
  },
  {
    id: 'operator',
    icon: 'operator',
    title: 'Admin / Operator',
    short: 'Human in the loop',
    description: 'Field teams and administrators review alerts and coordinate a response from the dashboard.',
  },
]
