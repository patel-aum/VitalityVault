import React, { useState } from 'react';
import GeneratePatientData from './generatePatientData';

const PatientPanel = () => {
    const [patientData, setPatientData] = useState(GeneratePatientData());

    const handleRegenerate = () => {
        setPatientData(GeneratePatientData());
    }

    return (
        <div>
            <h2>Room Number: {patientData.roomNumber}</h2>
            <p>Patient ID: {patientData.patientInfo.id}</p>
            <p>Patient Name: {patientData.patientInfo.name}</p>
            <p>Patient Age: {patientData.patientInfo.age}</p>
            <p>Patient Weight: {patientData.patientInfo.weight}</p>
            <p>Patient Doctor: {patientData.patientInfo.doctor}</p>
            <p>Patient Health Issue: {patientData.patientInfo.healthIssue}</p>
<p>Patient Oxygen Level Last Updated: {patientData.patientInfo.oxygenLevelLastUpdated}</p>
<p>Patient Blood Pressure Last Updated: {patientData.patientInfo.bloodPressureLastUpdated}</p>
<p>Patient Temperature Last Updated: {patientData.patientInfo.temperatureLastUpdated}</p>
<button onClick={handleRegenerate}>Regenerate Patient Data</button>
</div>
)
}

export default PatientPanel;


