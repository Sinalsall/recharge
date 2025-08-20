
import React, { useState, useEffect } from 'react';
import devicesData from './device_data.json';
import DeviceModal from './DeviceModal'; 


export default function RealTimeDataSumur() {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null); 

 
  useEffect(() => {
    setDevices(devicesData);
  }, []);


  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  const handleCloseModal = () => {
    setSelectedDevice(null);
  };

  return (
    <>
      <h1>Real Time Data</h1>

      <div className="device-container">
        <ul className="device-list">
          {devices.map((device) => (
            <li 
              key={device.location} 
              className="device" 
              onClick={() => handleDeviceClick(device)}
            >
              <h2 className="device-name">{device.location}</h2>
              <p>{device.name} </p>
            </li>
          ))}
        </ul>
      </div>

 
      <DeviceModal device={selectedDevice} onClose={handleCloseModal} />
    </>
  );
}