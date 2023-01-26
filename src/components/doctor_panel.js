import React, { useState } from 'react';
import PatientData from './json/patientData';
import './doctor_panel.css';
const Doctorpanel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 10;
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = PatientData.slice(indexOfFirstPatient, indexOfLastPatient);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(PatientData.length / patientsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1>Recents Patients</h1>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Room Number</th>
          </tr>
        </thead>
        <tbody>
          {currentPatients.map((patient, index) => (
            <tr key={index}>
              <td><img src={patient.photo} alt={patient.name}/></td>
              <td>{patient.name}</td>
              <td>{patient.roomNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {pageNumbers.map(number => (
          <button key={number} id={number} onClick={handleClick}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default  Doctorpanel;

