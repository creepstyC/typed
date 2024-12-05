const express = require('express');
const Stats = require('../models/Stats');
const router = express.Router();

//read
router.get('/', async (req, res) => {
    try {
        const stats = await Stats.find();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: 'Error getting stats' });
    }
});

//create
router.post('/', async (req, res) => {
    const { userId, wpm, accuracy, time } = req.body;
    try {
        const newStats = new Stats({ userId, wpm, accuracy, time });
        const savedStats = await newStats.save();
        res.status(201).json(savedStats);
    } catch (error) {
        res.status(400).json({ message: 'Error adding stats' });
    }
});

//read by user
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const userStats = await Stats.find({ userId });
        res.json(userStats);
    } catch (error) {
        res.status(500).json({ message: 'Error getting stats by user' });
    }
});

module.exports = router;