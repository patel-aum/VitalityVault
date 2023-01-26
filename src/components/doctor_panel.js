import React, { useState } from 'react';
import PatientData from './json/patientData';
import './doctor_panel.css';
import EditButton from './adddata';
import Modal from 'react-modal';

const Doctorpanel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 10;
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = PatientData.slice(indexOfFirstPatient, indexOfLastPatient);

  const [showModal, setShowModal] = useState(false);

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
            <th>Add Data</th>
          </tr>
        </thead>
        <tbody>
          {currentPatients.map((patient, index) => (
            <tr key={index}>
              <td><img src={patient.photo} alt={patient.name}/></td>
              <td>{patient.name}</td>
              <td>{patient.roomNumber}</td>
              <td><button className='btn' onClick={() => setShowModal(true)}>Add</button></td>
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
       <Modal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            style={customStyles}
        >
            <EditButton />
        </Modal>
    </div>
  );
};

export default  Doctorpanel;
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
