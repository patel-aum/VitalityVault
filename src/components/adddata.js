import React, { useState } from 'react';
import "./dataaad.css"
const EditButton = () => {
  const [oxygenLevel, setOxygenLevel] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [temperature, setTemperature] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let jsonData = {
    patientInfo: {
    Lastoxygenlevel: oxygenLevel,
    Lastbloodpressurelevel: bloodPressure,
    Lasttemraturelevel: temperature
    }
    };
    localStorage.setItem("./json/patientdata", JSON.stringify(jsonData));
    };
  return (
    <div>
      <form className='AddDataForm' onSubmit={handleSubmit}>
        <label className='lbl'>
          Oxygen Level:
          <input
            type="text"
            value={oxygenLevel}
            onChange={(e) => setOxygenLevel(e.target.value)}
          />
        </label>
        <label>
          Blood Pressure:
          <input
            type="text"
            value={bloodPressure}
            onChange={(e) => setBloodPressure(e.target.value)}
          />
        </label>
        <label>
          Temperature:
          <input
            type="text"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </label>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditButton;
