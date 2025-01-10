import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Hospital Food Management Dashboard</h1>
            <div className="dashboard-links">
                <a href="/patients">Manage Patients</a>
                <a href="/diet-charts">Manage Diet Charts</a>
                <a href="/pantry">Pantry Management</a>
                <a href="/delivery">Delivery Management</a>
            </div>
        </div>
    );
};

export default Dashboard;