const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const DeliverySchema = new mongoose.Schema({
    patientId: String,
    boxDetails: String,
    deliveryPerson: String,
    status: { type: String, default: 'Pending' },
});
const Delivery = mongoose.model('Delivery', DeliverySchema);

router.get('/api/deliveries', async (req, res) => {
    const deliveries = await Delivery.find();
    res.json(deliveries);
});

router.post('/api/deliveries', async (req, res) => {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.json(delivery);
});

router.put('/api/deliveries/:id', async (req, res) => {
    const updatedDelivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDelivery);
});

module.exports=router