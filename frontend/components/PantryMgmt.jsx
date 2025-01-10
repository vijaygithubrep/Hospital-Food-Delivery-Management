import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PantryManagement = () => {
    const [pantryStaff, setPantryStaff] = useState([]);
    const [newStaff, setNewStaff] = useState({ name: '', contact: '', location: '' });

    useEffect(() => {
        const fetchPantryStaff = async () => {
            const { data } = await axios.get('http://localhost:5000/api/pantries');
            setPantryStaff(data);
        };
        fetchPantryStaff();
    }, []);

    const handleChange = (e) => {
        setNewStaff({ ...newStaff, [e.target.name]: e.target.value });
    };

    const handleAddStaff = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/pantries', newStaff);
            setPantryStaff([...pantryStaff, data]);
            setNewStaff({ name: '', contact: '', location: '' });
        } catch (error) {
            console.error('Error adding staff:', error);
        }
    };

    return (
        <div className="pantry-management">
            <h2>Manage Pantry Staff</h2>
            <form onSubmit={handleAddStaff}>
                <input
                    name="name"
                    placeholder="Staff Name"
                    value={newStaff.name}
                    onChange={handleChange}
                />
                <input
                    name="contact"
                    placeholder="Contact Info"
                    value={newStaff.contact}
                    onChange={handleChange}
                />
                <input
                    name="location"
                    placeholder="Location"
                    value={newStaff.location}
                    onChange={handleChange}
                />
                <button type="submit">Add Staff</button>
            </form>
            <h3>Current Pantry Staff</h3>
            <ul>
                {pantryStaff.map((staff) => (
                    <li key={staff._id}>{staff.name} - {staff.contact} ({staff.location})</li>
                ))}
            </ul>
        </div>
    );
};

export default PantryManagement;
