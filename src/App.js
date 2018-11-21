import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './components/pageviews/LandingPage';
import Navigation from './components/pageviews/Navigation';
import Login from './components/pageviews/Login';
import SignUp from './components/pageviews/SignUp';
import Garage from './components/pageviews/Garage';

import AddNewVehicleForm from './components/Vehicles/AddNewVehicleForm';  
// SINGLE VEHICLE IMPORT
import Vehicle  from './components/Vehicles/Vehicle';
import Maintenance from './components/Maintenance/Maintenance';

import './App.css';

export default function App() {
    return (
      <Router>
        <div className="router-wrapper">
          <Navigation />
          <main role="main">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/garage" component={Garage} />
            <Route path="/vehicle/:vehicleID" component={Vehicle} />
            <Route path="/vehicle/:vehicleID/maintenance/:maintenanceID" component={Maintenance}/>
            {/* <Route exact path="/AddNewVehicleForm" component={AddNewVehicleForm} /> */}
          </main>
        </div>
      </Router>
    );
}


