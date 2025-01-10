import React, { useState } from 'react';
import axios from 'axios';

const DietChartForm = () => {
    const [dietChart, setDietChart] = useState({
        patientId: '',
        morning: '',
        evening: '',
        night: '',
        instructions: '',
    });

    const handleChange = (e) => {
        setDietChart({ ...dietChart, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/diets', dietChart);
            alert('Diet chart created successfully');
        } catch (error) {
            console.error('Error creating diet chart:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="diet-chart-form">
            <h2>Create Diet Chart</h2>
            <input
                name="patientId"
                placeholder="Patient ID"
                onChange={handleChange}
            />
            <input
                name="morning"
                placeholder="Morning Meal"
                onChange={handleChange}
            />
            <input
                name="evening"
                placeholder="Evening Meal"
                onChange={handleChange}
            />
            <input
                name="night"
                placeholder="Night Meal"
                onChange={handleChange}
            />
            <textarea
                name="instructions"
                placeholder="Special Instructions"
                onChange={handleChange}
            ></textarea>
            <button type="submit">Create Chart</button>
        </form>
    );
};

export default DietChartForm;