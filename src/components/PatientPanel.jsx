import React from 'react';
import "./PatientPanel.css";
function PatientPanel(props) {
    const { roomNumber, patientInfo } = props;
    const { photo, name, age, weight, doctor, healthIssue,Lastbloodpressurelevel,Lasttemraturelevel, Lastoxygenlevel,oxygenLevelLastUpdated, bloodPressureLastUpdated, temperatureLastUpdated } = patientInfo;
    return (
      <div className="patient-panel">
        <h1 className="patient-panel__title">Room {roomNumber} - {name}</h1>
        <div className="patient-panel__info">
          <img src={photo} alt={name} className="patient-panel__photo" />
          <p className="patient-panel__text">Age: {age}</p>
          <p className="patient-panel__text">Weight: {weight}</p>
          <p className="patient-panel__text">Doctor: {doctor}</p>
          <p className="patient-panel__text">Health Issue: {healthIssue}</p>
          <p className="patient-panel__text">Oxygen Level : {Lastoxygenlevel} <p className='lastupdated'> Last Updated: {oxygenLevelLastUpdated}</p></p>
          <p className="patient-panel__text">Blood Pressure:{Lastbloodpressurelevel}<p className='lastupdated'>Last Updated: {bloodPressureLastUpdated}</p></p>
          <p className="patient-panel__text">Temperature: {Lasttemraturelevel } C<p className='lastupdated'>Last Updated: {temperatureLastUpdated}</p></p>

        </div>
      </div>
    );
  }
  export default PatientPanel;
