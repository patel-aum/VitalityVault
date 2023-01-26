import React from 'react';
import "./json/datapatient.json"
function PatientPanel({ roomNumber, patientInfo }) {
  return (
    <div>
      <h2>Patient Information - Room {roomNumber}</h2>
      <img src={patientInfo.photo} alt={patientInfo.name} />
      <h3>Name: {patientInfo.name}</h3>
      <p>Age: {patientInfo.age}</p>
      <p>Weight: {patientInfo.weight}</p>
      <p>Doctor: {patientInfo.doctor}</p>
      <p>Health Issue: {patientInfo.healthIssue}</p>
      <p>
        Oxygen Level (last updated at {patientInfo.oxygenLevelLastUpdated}):{' '}
        {patientInfo.oxygenLevel}
      </p>
      <p>
        Blood Pressure (last updated at {patientInfo.bloodPressureLastUpdated}):{' '}
        {patientInfo.bloodPressure}
      </p>
      <p>
        Temperature (last updated at {patientInfo.temperatureLastUpdated}):{' '}
        {patientInfo.temperature}
      </p>
    </div>
  );
}

export default PatientPanel;
