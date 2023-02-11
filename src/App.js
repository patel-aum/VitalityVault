import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Doctorpanel from './components/doctor_panel';
import Sidebar from "./components/Sidebar";
import PatientPanel from "./components/PatientPanel";
import Monitoringpanel from "./components/Monitoringpanel";
import Login from './components/Loginpage';
import data from "./components/json/datapatient.json"
import Grafena from './components/grafena';
import Navbar from './components/navbar';
function App(){
  return (
   <React.Fragment>
   <Navbar/>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Router>
      <Routes>
        <Route exact0 path='/' exact element={<Login/>} />
        <Route exact1 path='/doctorpanel' exact element={<Doctorpanel />} />
        <Route exact2 path='/patientpanel' exact element={<PatientPanel roomNumber={data.roomNumber}  patientInfo={data.patientInfo} />} />
        <Route exact3 path='/monitoringpanel' exact element={<Grafena />} />

  {/* <Switch>
     <Navbar isAuth={loggedIn} />
     <Route exact0 path="/" exact component={<Login/>} />
     <Route path="/" component={<Login/>} />
     <PrivateRoute path="/dashboard" component={Dashboard} />
  </Switch> */}


    </Routes>
    </Router>
 </React.Fragment>
  );
}

export default App;
