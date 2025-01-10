const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const bodyParser = require('body-parser');
const Delivery = require('./Models/DeliverySchema')
const Diet = require('./Models/DietSchema')
const Pantry = require('./Models/PantrySchema')
const Patients = require('./Models/PatientSchema')
const port = process.env.PORT || 5000;

const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('', Delivery)
app.use('',Diet)
app.use('', Pantry)
app.use('', Patients)

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    });