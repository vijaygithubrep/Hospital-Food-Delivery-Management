import React, { useState } from 'react';
import axios from 'axios';
import "../components/styles.css"

const PatientForm = () => {
    const [patient, setPatient] = useState({
        name: '',
        diseases: '',
        allergies: '',
        roomNumber: '',
        bedNumber: '',
        floorNumber: '',
        age: '',
        gender: '',
        contactInfo: '',
        emergencyContact: '',
    });

    const handleChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/patients', patient);
            alert('Patient added successfully');
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="patient-form">
            <h2>Add Patient</h2>
            <input name="name" placeholder="Patient Name" onChange={handleChange} />
            <input name="diseases" placeholder="Diseases" onChange={handleChange} />
            <input name="allergies" placeholder="Allergies" onChange={handleChange} />
            <input name="roomNumber" placeholder="Room Number" onChange={handleChange} />
            <input name="bedNumber" placeholder="Bed Number" onChange={handleChange} />
            <input name="floorNumber" placeholder="Floor Number" onChange={handleChange} />
            <input name="age" type="number" placeholder="Age" onChange={handleChange} />
            <input name="gender" placeholder="Gender" onChange={handleChange} />
            <input name="contactInfo" placeholder="Contact Information" onChange={handleChange} />
            <input name="emergencyContact" placeholder="Emergency Contact" onChange={handleChange} />
            <button type="submit">Add Patient</button>
        </form>
    );
};

export default PatientForm;