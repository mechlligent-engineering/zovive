export const PRODUCTS = [
  {
    id: 'wildlife-monitoring',
    icon: 'wildlife',
    title: 'Wildlife Monitoring',
    description: 'Track movement patterns of wildlife near human settlements and infrastructure corridors.',
    summary:
      'Edge cameras and on-device models detect and identify wildlife near human settlements and infrastructure corridors. Every detection event — species, location, and confidence — is sent to the Base Station in real time, giving field teams a continuous picture of animal movement without constant manual monitoring.',
    capabilities: ['Species-level detection', 'Edge inference on-device', 'Real-time event streaming'],
  },
  {
    id: 'fence-breach-detection',
    icon: 'fence',
    title: 'Fence / Breach Detection',
    description: 'Detect fence tampering, breaks, or intrusions along perimeter lines in real time.',
    summary:
      'Sensors along fence lines continuously watch for tampering, breaks, and intrusion attempts. When a possible breach is detected, ZOVIVE generates an alert and routes it to the nearest response team — turning silent fence failures into actionable, timestamped signals.',
    capabilities: ['Perimeter-wide coverage', 'Tamper & breach alerts', 'Sub-minute alert routing'],
  },
  {
    id: 'drone-monitoring',
    icon: 'drone',
    title: 'Drone-based Monitoring',
    description: 'Autonomous aerial patrols for rapid verification and coverage of hard-to-reach terrain.',
    summary:
      'Autonomous and operator-guided drones extend surveillance beyond fixed infrastructure, covering terrain that is slow or unsafe to patrol on foot. Aerial detections feed into the same pipeline as ground sensors and cameras — another sensing layer within one unified platform, not a separate system.',
    capabilities: ['Autonomous flight paths', 'On-demand aerial verification', 'Unified data pipeline'],
  },
  {
    id: 'environmental-sensors',
    icon: 'sensor',
    title: 'Environmental Sensor Monitoring',
    description: 'Ambient sensor networks tracking terrain, weather, and ecological signals continuously.',
    summary:
      'A network of environmental sensors tracks terrain, weather, and ecological telemetry around monitored sites. Device health and environmental conditions are reported continuously, giving every detection event the context it needs to separate a real signal from environmental noise.',
    capabilities: ['Weather & terrain telemetry', 'Device health reporting', 'Context for every alert'],
  },
  {
    id: 'camera-monitoring',
    icon: 'camera',
    title: 'Camera Monitoring',
    description: 'AI-assisted camera feeds that flag events of interest instead of raw, unwatched footage.',
    summary:
      'Camera feeds across a deployment are centralized into a single live monitoring view. Rather than raw, unwatched footage, AI-assisted review flags the moments that matter — so operators see relevant events, not hours of empty video.',
    capabilities: ['Centralized live feeds', 'AI-flagged events', 'Reduced review time'],
  },
  {
    id: 'administration-platform',
    icon: 'dashboard',
    title: 'Administration Platform',
    description: 'A unified control layer for field teams and administrators to manage alerts and response.',
    summary:
      'A central dashboard brings detections, alerts, device health, camera feeds, and telemetry into one operational view — aggregated across every site in a deployment, not just one. Field teams get a dedicated on-site system that keeps working even without internet access, while administrators get a cloud-hosted view, fully responsive on desktop or mobile, for oversight from anywhere. The control layer that ties every other product into one coherent system.',
    capabilities: ['Multi-site aggregation', 'Works offline in the field', 'Mobile-responsive for field teams'],
  },
]
