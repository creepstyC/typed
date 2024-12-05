const express = require('express');
const mongoose = require('mongoose');
const wordRoutes = require('./routes/wordRoutes');
const statsRoutes = require('./routes/statsRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API running...');
});

app.use('/api/words', wordRoutes);
app.use('/api/stats', statsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});