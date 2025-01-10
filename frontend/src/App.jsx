import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import PatientForm from '../components/PatientForm';
import DietChartForm from '../components/DietChartForm';
import PantryManagement from '../components/PantryMgmt';
import DeliveryManagement from '../components/DeliveryMgmt';
//import Login from '../components/Login';

function App() {
    return (
        <Router>
            <Routes>
               
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patients" element={<PatientForm />} />
                <Route path="/diet-charts" element={<DietChartForm />} />
                <Route path="/pantry" element={<PantryManagement />} />
                <Route path="/delivery" element={<DeliveryManagement />} />
            </Routes>
        </Router>
    );
}

export default App;