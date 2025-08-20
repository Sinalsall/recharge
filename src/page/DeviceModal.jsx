import React from 'react';


export default function DeviceModal({ device, onClose }) {
  if (!device) {
    return null; 
  }


  const handleOverlayClick = () => {
    onClose();
  };

  // This prevents the modal from closing when you click inside the content area
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="device-name">{device.location}</h2>
        <ul>
          <li><strong>Nama:</strong> {device.name}</li>
          <li><strong>Debit:</strong> {device.debit_m3_per_day} m³/day</li>
          <li><strong>Total Volume:</strong> {device.volume_total_m3} m³</li>
          <li><strong>Groundwater Level:</strong> {device.groundwater_level_m} m</li>
          <li><strong>Coordinates:</strong> [{device.coordinates.join(', ')}]</li>
          <li><strong>Last Updated:</strong> {new Date(device.last_updated).toLocaleString()}</li>
        </ul>
      </div>
    </div>
  );
}