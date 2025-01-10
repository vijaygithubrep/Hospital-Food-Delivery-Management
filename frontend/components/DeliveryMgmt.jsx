import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeliveryManagement = () => {
    const [deliveries, setDeliveries] = useState([]);
    const [newDelivery, setNewDelivery] = useState({
        patientId: '',
        boxDetails: '',
        deliveryPerson: '',
    });

    useEffect(() => {
        const fetchDeliveries = async () => {
            const { data } = await axios.get('http://localhost:5000/api/deliveries');
            setDeliveries(data);
        };
        fetchDeliveries();
    }, []);

    const handleChange = (e) => {
        setNewDelivery({ ...newDelivery, [e.target.name]: e.target.value });
    };

    const handleAddDelivery = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/deliveries', newDelivery);
            setDeliveries([...deliveries, data]);
            setNewDelivery({ patientId: '', boxDetails: '', deliveryPerson: '' });
        } catch (error) {
            console.error('Error adding delivery:', error);
        }
    };

    const markDelivered = async (id) => {
        try {
            await axios.put(`http://localhost:5000/api/deliveries/${id}`, { status: 'Delivered' });
            setDeliveries(deliveries.map(delivery => delivery._id === id ? { ...delivery, status: 'Delivered' } : delivery));
        } catch (error) {
            console.error('Error marking as delivered:', error);
        }
    };

    return (
        <div className="delivery-management">
            <h2>Delivery Management</h2>
            <form onSubmit={handleAddDelivery}>
                <input
                    name="patientId"
                    placeholder="Patient ID"
                    value={newDelivery.patientId}
                    onChange={handleChange}
                />
                <input
                    name="boxDetails"
                    placeholder="Meal Box Details"
                    value={newDelivery.boxDetails}
                    onChange={handleChange}
                />
                <input
                    name="deliveryPerson"
                    placeholder="Delivery Person"
                    value={newDelivery.deliveryPerson}
                    onChange={handleChange}
                />
                <button type="submit">Add Delivery</button>
            </form>
            <h3>Current Deliveries</h3>
            <ul>
                {deliveries.map((delivery) => (
                    <li key={delivery._id}>
                        {delivery.boxDetails} - {delivery.deliveryPerson} ({delivery.status})
                        {delivery.status !== 'Delivered' && (
                            <button onClick={() => markDelivered(delivery._id)}>Mark Delivered</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeliveryManagement;