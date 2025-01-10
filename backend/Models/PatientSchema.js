const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const PatientSchema = new mongoose.Schema({
    name: String,
    diseases: String,
    allergies: String,
    roomNumber: String,
    bedNumber: String,
    floorNumber: String,
    age: Number,
    gender: String,
    contactInfo: String,
    emergencyContact: String,
});
const Patient = mongoose.model('Patients', PatientSchema);

// Patient Routes
router.get('/api/patients', async (req, res) => {
    const patients = await Patient.find();
    res.json(patients);
});

router.post('/api/patients', async (req, res) => {
    const patient = new Patient(req.body);
    await patient.save();
    res.json(patient);
});

router.put('/api/patients/:id', async (req, res) => {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPatient);
});

router.delete('/api/patients/:id', async (req, res) => {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: 'Patient deleted' });
});

module.exports = router;