const { text } = require('express');
const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;