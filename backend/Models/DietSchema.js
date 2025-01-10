const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const DietChartSchema = new mongoose.Schema({
    patientId: String,
    morning: String,
    evening: String,
    night: String,
    instructions: String,
});
const DietChart = mongoose.model('DietChart', DietChartSchema);

// Diet Chart Routes
router.get('/api/diets', async (req, res) => {
    const diets = await DietChart.find();
    res.json(diets);
});

router.post('/api/diets', async (req, res) => {
    const dietChart = new DietChart(req.body);
    await dietChart.save();
    res.json(dietChart);
});

router.put('/api/diets/:id', async (req, res) => {
    const updatedDiet = await DietChart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDiet);
});

router.delete('/api/diets/:id', async (req, res) => {
    await DietChart.findByIdAndDelete(req.params.id);
    res.json({ message: 'Diet chart deleted' });
});

module.exports = router;