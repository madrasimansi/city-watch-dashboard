import React, { useState } from 'react';
import { MapPin, Navigation, Maximize2, AlertTriangle } from 'lucide-react';
import { mockOfficers, mockIncidents } from '../../data/mockData';

const MapTab: React.FC = () => {
  const [selectedOfficer, setSelectedOfficer] = useState<string | null>(null);
  
  return (
    <div>
      <div className="card">
        <h2 className="card-title">Live Officer Locations</h2>
        <div className="map-container">
          <div className="map-placeholder">
            <div className="loading-spinner"></div>
            <h3 style={{ color: '#94a3b8', marginBottom: '1rem' }}>Interactive Map</h3>
            <p style={{ color: '#64748b', textAlign: 'center', maxWidth: '400px' }}>
              MAPPLS API integration will display real-time officer locations here.
              <br />
              <small>Note: Add your MAPPLS API key to enable live map functionality</small>
            </p>
            
            {/* Simulated Officer Markers */}
            <div style={{ 
              position: 'absolute', 
              top: '20%', 
              left: '30%', 
              background: 'rgba(34, 197, 94, 0.9)', 
              padding: '8px', 
              borderRadius: '50%',
              cursor: 'pointer'
            }}>
              <MapPin size={16} color="white" />
            </div>
            
            <div style={{ 
              position: 'absolute', 
              top: '60%', 
              left: '70%', 
              background: 'rgba(251, 191, 36, 0.9)', 
              padding: '8px', 
              borderRadius: '50%',
              cursor: 'pointer'
            }}>
              <Navigation size={16} color="white" />
            </div>
            
            <div style={{ 
              position: 'absolute', 
              top: '40%', 
              left: '60%', 
              background: 'rgba(239, 68, 68, 0.9)', 
              padding: '8px', 
              borderRadius: '50%',
              cursor: 'pointer'
            }}>
              <AlertTriangle size={16} color="white" />
            </div>
          </div>
          
          <div className="map-controls">
            <button className="control-button" title="Zoom In">+</button>
            <button className="control-button" title="Zoom Out">-</button>
            <button className="control-button" title="Center Map">
              <Navigation size={16} />
            </button>
            <button className="control-button" title="Fullscreen">
              <Maximize2 size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h2 className="card-title">Officer Locations</h2>
          <div className="officer-list">
            {mockOfficers.map(officer => (
              <div 
                key={officer.id} 
                className={`officer-item ${selectedOfficer === officer.id ? 'selected' : ''}`}
                onClick={() => setSelectedOfficer(officer.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="officer-avatar">
                  <MapPin size={16} />
                </div>
                <div className="officer-info">
                  <div className="officer-name">{officer.name}</div>
                  <div className="officer-details">
                    📍 {officer.location.address}
                  </div>
                  <div className="officer-details">
                    Lat: {officer.location.lat.toFixed(4)}, Lng: {officer.location.lng.toFixed(4)}
                  </div>
                  <div className="officer-details">
                    Updated: {officer.lastUpdate}
                  </div>
                </div>
                <div className={`status-badge status-${officer.status}`}>
                  {officer.status.replace('-', ' ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Traffic Incidents</h2>
          <div className="officer-list">
            {mockIncidents.map(incident => (
              <div key={incident.id} className="officer-item">
                <div className="officer-avatar" style={{ 
                  background: incident.severity === 'high' ? '#ef4444' : 
                             incident.severity === 'medium' ? '#f59e0b' : '#22c55e'
                }}>
                  <AlertTriangle size={16} />
                </div>
                <div className="officer-info">
                  <div className="officer-name">
                    {incident.type.charAt(0).toUpperCase() + incident.type.slice(1)}
                  </div>
                  <div className="officer-details">
                    📍 {incident.location.address}
                  </div>
                  <div className="officer-details">
                    Reported by: {incident.reportedBy} • {incident.timestamp}
                  </div>
                  <div className="officer-details">
                    Severity: {incident.severity.toUpperCase()}
                  </div>
                </div>
                <div className={`status-badge ${
                  incident.status === 'active' ? 'status-on-duty' : 
                  incident.status === 'resolved' ? 'status-off-duty' : 'status-patrolling'
                }`}>
                  {incident.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapTab;