import { useState } from 'react';
import './DevicePage.css';

export default function DevicePage() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Configurable hotspot positions (x, y as percentages)
  const hotspots = [
    {
      id: 'setup',
      x: 25,
      y: 20,
      title: 'Setup',
      description: 'Clip on attachment points around the drip chamber and the IV stand are user friendly and reduce setup time'
    },
    {
      id: 'input',
      x: 75,
      y: 20,
      title: 'Input',
      description: 'Medical providers directly enter the prescribed flow rate (e.g. cc/hr), eliminating error-prone manual drip counting calculations'
    },
    {
      id: 'monitoring',
      x: 25,
      y: 70,
      title: 'Monitoring',
      description: 'Our device continuously updates flow rate as drips pass through the chamber, allowing for live-time reporting'
    },
    {
      id: 'alarms',
      x: 75,
      y: 70,
      title: 'Alarms',
      description: 'Light and sound-based technology alerts nurses when drip rate falls outside acceptable thresholds'
    }
  ];

  return (
    <div className="content">
      <h1>Our Device</h1>
      
      <p className="device-intro">
        IVFlow is a reusable IV infusion monitoring system for automated tracking of IV infusion rates in under-resourced clinical settings. Our device development prioritizes a simple-to-use interface with responsive flowrate tracking at much lower cost compared to our competitors.
      </p>
      
      <div className="interactive-section">
        <div className="device-diagram">
          <div className="diagram-placeholder">
            <span>Device Image</span>
          </div>
          
          {hotspots.map((hotspot) => (
            <div
              key={hotspot.id}
              className={`hotspot ${activeHotspot === hotspot.id ? 'active' : ''}`}
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              onMouseEnter={() => setActiveHotspot(hotspot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <div className="hotspot-circle">
                <div className="pulse-ring"></div>
              </div>
              
              {activeHotspot === hotspot.id && (
                <div className="hotspot-tooltip">
                  <h3>{hotspot.title}</h3>
                  <p>{hotspot.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="text-content">
          <h2>Mechanical Design</h2>
          <p>
            The mechanical team is focused on designing and refining the attachment mechanisms and housing units that integrate seamlessly with standard IV stands. Current efforts center on developing a durable ring design that securely connects the photosensing system to the drip chamber, ensuring stability and accuracy. Upcoming design iterations will introduce an enclosed housing to protect and secure the internal circuitry, enhancing the device's durability, safety, and ease of use in clinical environments.
          </p>
        </div>
        <div className="image-placeholder">
          <div className="placeholder-box">
            <span>Mechanical Design Image</span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="text-content">
          <h2>Electrical System</h2>
          <p>
            The electrical team is focused on developing a reliable and efficient circuit system that monitors IV drip infusions in real time. The system is designed to accurately capture and process drop data across a variety of liquid types while minimizing interference through effective noise filtering. Current efforts emphasize creating a cost-efficient and compact printed circuit board (PCB) that ensures consistent performance, ease of integration, and long-term durability within the device's overall design.
          </p>
        </div>
        <div className="image-placeholder">
          <div className="placeholder-box">
            <span>Electrical System Image</span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="text-content">
          <h2>Software Interface</h2>
          <p>
            The software team is focused on creating an intuitive and responsive touchscreen interface that allows users to easily set threshold values for IV drip rates and maintain seamless communication with the device. The system integrates real-time signal acquisition from the electrical circuit to accurately calculate and display live drip rates, ensuring precise monitoring. Additionally, a clear visual alarm system has been implemented to promptly alert users whenever the measured drip rate falls below the configured threshold, enhancing reliability and patient safety during operation.
          </p>
        </div>
        <div className="image-placeholder">
          <div className="placeholder-box">
            <span>Software Interface Image</span>
          </div>
        </div>
      </div>
    </div>
  );
}