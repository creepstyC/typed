const express = require('express');
const Word = require('../models/Word');
const router = express.Router();

//read
router.get('/', async (req, res) => {
    try {
        const words = await Word.find();
        res.json(words);
    } catch (error) {
        res.status(500).json({ message: 'Error getting the words' });
    }
});

//create
router.post('/', async (req, res) => {
    const { text } = req.body;
    try {
        const newWord = new Word({ text });
        const savedWord = await newWord.save();
        res.status(201).json(savedWord);
    } catch (error) {
        res.status(400).json({ message: 'Error adding the word' });
    }
});

//update
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    try {
        const updatedWord = await Word.findByIdAndUpdate(
            id,
            { text },
            { new: true }
        );
        if (!updatedWord) return res.status(404).json({ message: 'Word not found' });
        res.json(updatedWord);
    } catch (error) {
        res.status(400).json({ message: 'Error updating the word' });
    }
});

//delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedWord = await Word.findByIdAndDelete(id);
        if (!deletedWord) return res.status(404).json({ message: 'Word not found' });
        res.json({ message: 'Word successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting the word' });
    }
});

module.exports = router;