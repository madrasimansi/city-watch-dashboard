export interface Officer {
  id: string;
  name: string;
  badgeNumber: string;
  rank: string;
  status: 'on-duty' | 'off-duty' | 'patrolling' | 'offline';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  shift: {
    start: string;
    end: string;
    zone: string;
  };
  contact: string;
  lastUpdate: string;
  cameraId: string;
}

export const mockOfficers: Officer[] = [
  {
    id: 'OFF001',
    name: 'Inspector Rajesh Kumar',
    badgeNumber: 'TP-2401',
    rank: 'Inspector',
    status: 'on-duty',
    location: {
      lat: 28.6139,
      lng: 77.2090,
      address: 'Connaught Place, Delhi'
    },
    shift: {
      start: '06:00',
      end: '14:00',
      zone: 'Zone A - Central Delhi'
    },
    contact: '+91-9876543210',
    lastUpdate: '2 minutes ago',
    cameraId: 'CAM001'
  },
  {
    id: 'OFF002',
    name: 'Constable Priya Singh',
    badgeNumber: 'TP-2402',
    rank: 'Constable',
    status: 'patrolling',
    location: {
      lat: 28.5355,
      lng: 77.3910,
      address: 'Noida Sector 18'
    },
    shift: {
      start: '14:00',
      end: '22:00',
      zone: 'Zone B - East Delhi'
    },
    contact: '+91-9876543211',
    lastUpdate: '1 minute ago',
    cameraId: 'CAM002'
  },
  {
    id: 'OFF003',
    name: 'Sub-Inspector Amit Sharma',
    badgeNumber: 'TP-2403',
    rank: 'Sub-Inspector',
    status: 'on-duty',
    location: {
      lat: 28.6692,
      lng: 77.4538,
      address: 'Ghaziabad Main Road'
    },
    shift: {
      start: '22:00',
      end: '06:00',
      zone: 'Zone C - North Delhi'
    },
    contact: '+91-9876543212',
    lastUpdate: '5 minutes ago',
    cameraId: 'CAM003'
  },
  {
    id: 'OFF004',
    name: 'Head Constable Sunita Devi',
    badgeNumber: 'TP-2404',
    rank: 'Head Constable',
    status: 'off-duty',
    location: {
      lat: 28.4595,
      lng: 77.0266,
      address: 'Gurgaon Cyber City'
    },
    shift: {
      start: '06:00',
      end: '14:00',
      zone: 'Zone D - South Delhi'
    },
    contact: '+91-9876543213',
    lastUpdate: '1 hour ago',
    cameraId: 'CAM004'
  },
  {
    id: 'OFF005',
    name: 'Constable Rohit Verma',
    badgeNumber: 'TP-2405',
    rank: 'Constable',
    status: 'patrolling',
    location: {
      lat: 28.7041,
      lng: 77.1025,
      address: 'Delhi University Area'
    },
    shift: {
      start: '14:00',
      end: '22:00',
      zone: 'Zone A - Central Delhi'
    },
    contact: '+91-9876543214',
    lastUpdate: '3 minutes ago',
    cameraId: 'CAM005'
  },
  {
    id: 'OFF006',
    name: 'Inspector Meera Joshi',
    badgeNumber: 'TP-2406',
    rank: 'Inspector',
    status: 'offline',
    location: {
      lat: 28.6304,
      lng: 77.2177,
      address: 'India Gate Circle'
    },
    shift: {
      start: '22:00',
      end: '06:00',
      zone: 'Zone B - East Delhi'
    },
    contact: '+91-9876543215',
    lastUpdate: '2 hours ago',
    cameraId: 'CAM006'
  }
];

export const trafficStats = {
  totalOfficers: mockOfficers.length,
  onDuty: mockOfficers.filter(o => o.status === 'on-duty').length,
  patrolling: mockOfficers.filter(o => o.status === 'patrolling').length,
  offDuty: mockOfficers.filter(o => o.status === 'off-duty').length,
  offline: mockOfficers.filter(o => o.status === 'offline').length
};

export interface TrafficIncident {
  id: string;
  type: 'accident' | 'violation' | 'congestion' | 'emergency';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  severity: 'low' | 'medium' | 'high';
  reportedBy: string;
  timestamp: string;
  status: 'active' | 'resolved' | 'investigating';
}

export const mockIncidents: TrafficIncident[] = [
  {
    id: 'INC001',
    type: 'accident',
    location: {
      lat: 28.6129,
      lng: 77.2295,
      address: 'ITO Junction'
    },
    severity: 'high',
    reportedBy: 'OFF001',
    timestamp: '10 minutes ago',
    status: 'active'
  },
  {
    id: 'INC002',
    type: 'congestion',
    location: {
      lat: 28.5244,
      lng: 77.1855,
      address: 'DLF Phase 1'
    },
    severity: 'medium',
    reportedBy: 'OFF004',
    timestamp: '25 minutes ago',
    status: 'investigating'
  }
];