import React from 'react';
import { Users, MapPin, Activity, Clock } from 'lucide-react';
import { mockOfficers, trafficStats } from '../../data/mockData';

const HomeTab: React.FC = () => {
  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card on-duty">
          <Users size={32} color="#22c55e" />
          <div className="stat-number">{trafficStats.onDuty}</div>
          <div className="stat-label">On Duty</div>
        </div>
        
        <div className="stat-card patrolling">
          <MapPin size={32} color="#fbbf24" />
          <div className="stat-number">{trafficStats.patrolling}</div>
          <div className="stat-label">Patrolling</div>
        </div>
        
        <div className="stat-card off-duty">
          <Clock size={32} color="#ef4444" />
          <div className="stat-number">{trafficStats.offDuty}</div>
          <div className="stat-label">Off Duty</div>
        </div>
        
        <div className="stat-card offline">
          <Activity size={32} color="#6b7280" />
          <div className="stat-number">{trafficStats.offline}</div>
          <div className="stat-label">Offline</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h2 className="card-title">Active Officers</h2>
          <div className="officer-list">
            {mockOfficers
              .filter(officer => officer.status === 'on-duty' || officer.status === 'patrolling')
              .map(officer => (
                <div key={officer.id} className="officer-item">
                  <div className="officer-avatar">
                    {officer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="officer-info">
                    <div className="officer-name">{officer.name}</div>
                    <div className="officer-details">
                      {officer.rank} • {officer.badgeNumber} • {officer.shift.zone}
                    </div>
                    <div className="officer-details">
                      📍 {officer.location.address}
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
          <h2 className="card-title">Recent Updates</h2>
          <div className="officer-list">
            {mockOfficers
              .sort((a, b) => {
                const timeA = a.lastUpdate.includes('minute') ? parseInt(a.lastUpdate) : 
                             a.lastUpdate.includes('hour') ? parseInt(a.lastUpdate) * 60 : 999;
                const timeB = b.lastUpdate.includes('minute') ? parseInt(b.lastUpdate) : 
                             b.lastUpdate.includes('hour') ? parseInt(b.lastUpdate) * 60 : 999;
                return timeA - timeB;
              })
              .slice(0, 8)
              .map(officer => (
                <div key={officer.id} className="officer-item">
                  <div className="officer-avatar">
                    {officer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="officer-info">
                    <div className="officer-name">{officer.name}</div>
                    <div className="officer-details">
                      Status updated • {officer.lastUpdate}
                    </div>
                    <div className="officer-details">
                      📍 {officer.location.address}
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

      <div className="card">
        <h2 className="card-title">All Officers Overview</h2>
        <div className="officer-list">
          {mockOfficers.map(officer => (
            <div key={officer.id} className="officer-item">
              <div className="officer-avatar">
                {officer.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="officer-info">
                <div className="officer-name">{officer.name}</div>
                <div className="officer-details">
                  {officer.rank} • {officer.badgeNumber} • {officer.contact}
                </div>
                <div className="officer-details">
                  Shift: {officer.shift.start} - {officer.shift.end} • {officer.shift.zone}
                </div>
                <div className="officer-details">
                  📍 {officer.location.address} • Updated {officer.lastUpdate}
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

export default HomeTab;