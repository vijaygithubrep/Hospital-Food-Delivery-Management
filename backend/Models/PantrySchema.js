const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const PantrySchema = new mongoose.Schema({
    name: String,
    contact: String,
    location: String,
});
const Pantry = mongoose.model('Pantry', PantrySchema);

// Pantry Routes
router.get('/api/pantries', async (req, res) => {
    const pantries = await Pantry.find();
    res.json(pantries);
});

router.post('/api/pantries', async (req, res) => {
    const pantry = new Pantry(req.body);
    await pantry.save();
    res.json(pantry);
});

module.exports = router;