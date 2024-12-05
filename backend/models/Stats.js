const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    wpm: {
        type: Number,
        required: false,
    },
    accuracy: {
        type: Number,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;