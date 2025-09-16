import React, { useState, useEffect } from 'react';
import { Camera, Play, Pause, Maximize2, Volume2 } from 'lucide-react';
import { mockOfficers } from '../../data/mockData';

const CameraTab: React.FC = () => {
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});

  // Simulate live camera feeds
  const activeCameras = mockOfficers.filter(officer => 
    officer.status === 'on-duty' || officer.status === 'patrolling'
  );

  const togglePlay = (cameraId: string) => {
    setIsPlaying(prev => ({
      ...prev,
      [cameraId]: !prev[cameraId]
    }));
  };

  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card on-duty">
          <Camera size={32} color="#22c55e" />
          <div className="stat-number">{activeCameras.length}</div>
          <div className="stat-label">Active Cameras</div>
        </div>
        
        <div className="stat-card patrolling">
          <Play size={32} color="#fbbf24" />
          <div className="stat-number">
            {Object.values(isPlaying).filter(Boolean).length}
          </div>
          <div className="stat-label">Live Streams</div>
        </div>
        
        <div className="stat-card">
          <Volume2 size={32} color="#3b82f6" />
          <div className="stat-number">HD</div>
          <div className="stat-label">Quality</div>
        </div>
        
        <div className="stat-card">
          <Maximize2 size={32} color="#8b5cf6" />
          <div className="stat-number">24/7</div>
          <div className="stat-label">Recording</div>
        </div>
      </div>

      <div className="camera-grid">
        {activeCameras.map(officer => (
          <div key={officer.cameraId} className="camera-feed">
            <div className="camera-header">
              <div className="camera-title">
                {officer.name} - {officer.badgeNumber}
              </div>
              <div className="camera-status">
                <div className="live-indicator"></div>
                <span style={{ fontSize: '0.8rem', color: '#22c55e' }}>LIVE</span>
              </div>
            </div>
            
            <div className="camera-video">
              <div className="video-placeholder">
                {isPlaying[officer.cameraId] ? (
                  <div>
                    <div className="loading-spinner"></div>
                    <p style={{ color: '#94a3b8', marginTop: '1rem' }}>
                      Streaming live feed from helmet camera
                    </p>
                    <small style={{ color: '#64748b' }}>
                      📍 {officer.location.address}
                    </small>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <Camera size={48} color="#94a3b8" />
                    <p style={{ color: '#94a3b8', marginTop: '1rem' }}>
                      Camera Ready
                    </p>
                    <small style={{ color: '#64748b' }}>
                      Click play to start live stream
                    </small>
                  </div>
                )}
                
                {/* Video Controls Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  right: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(0, 0, 0, 0.7)',
                  padding: '8px 12px',
                  borderRadius: '6px'
                }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      className="control-button"
                      onClick={() => togglePlay(officer.cameraId)}
                      style={{ padding: '4px 8px' }}
                    >
                      {isPlaying[officer.cameraId] ? 
                        <Pause size={14} /> : 
                        <Play size={14} />
                      }
                    </button>
                    <button className="control-button" style={{ padding: '4px 8px' }}>
                      <Volume2 size={14} />
                    </button>
                  </div>
                  
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                    {officer.status === 'patrolling' ? '🚗 Mobile' : '🏢 Stationary'}
                  </div>
                  
                  <button className="control-button" style={{ padding: '4px 8px' }}>
                    <Maximize2 size={14} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Camera Info */}
            <div style={{ 
              padding: '0.75rem', 
              background: 'rgba(30, 41, 59, 0.4)',
              fontSize: '0.8rem',
              color: '#94a3b8'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Zone: {officer.shift.zone}</span>
                <span className={`status-badge status-${officer.status}`} style={{ fontSize: '0.7rem' }}>
                  {officer.status.replace('-', ' ')}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>📍 {officer.location.address}</span>
                <span>Updated: {officer.lastUpdate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Offline Cameras */}
      <div className="card" style={{ marginTop: '2rem' }}>
        <h2 className="card-title">Offline Cameras</h2>
        <div className="officer-list">
          {mockOfficers
            .filter(officer => officer.status === 'off-duty' || officer.status === 'offline')
            .map(officer => (
              <div key={officer.id} className="officer-item">
                <div className="officer-avatar" style={{ background: '#6b7280' }}>
                  <Camera size={16} />
                </div>
                <div className="officer-info">
                  <div className="officer-name">{officer.name}</div>
                  <div className="officer-details">
                    {officer.rank} • {officer.badgeNumber} • Camera: {officer.cameraId}
                  </div>
                  <div className="officer-details">
                    Last seen: {officer.lastUpdate} • {officer.location.address}
                  </div>
                </div>
                <div className={`status-badge status-${officer.status}`}>
                  {officer.status.replace('-', ' ')}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CameraTab;