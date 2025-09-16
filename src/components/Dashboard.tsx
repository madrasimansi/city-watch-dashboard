import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import HomeTab from './tabs/HomeTab';
import MapTab from './tabs/MapTab';
import CameraTab from './tabs/CameraTab';
import { trafficStats } from '../data/mockData';
import '../styles/dashboard.css';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Dashboard', component: HomeTab },
    { id: 'map', label: 'Live Map', component: MapTab },
    { id: 'cameras', label: 'Live Cameras', component: CameraTab }
  ];

  const ActiveTabComponent = tabs.find(tab => tab.id === activeTab)?.component || HomeTab;

  return (
    <div className="dashboard">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <Shield size={20} color="white" />
            </div>
            <div className="logo-text">Traffic Police Command</div>
          </div>
          
          <div className="header-stats">
            <div className="stat-item">
              <div className="stat-number">{trafficStats.totalOfficers}</div>
              <div className="stat-label">Total Officers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{trafficStats.onDuty + trafficStats.patrolling}</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{trafficStats.offline}</div>
              <div className="stat-label">Offline</div>
            </div>
          </div>
        </div>
      </header>

      <nav className="nav-tabs">
        <ul className="tab-list">
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="tab-content">
        <ActiveTabComponent />
      </main>
    </div>
  );
};

export default Dashboard;