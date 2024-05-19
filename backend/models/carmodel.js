const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dispo: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    src: {
        type: String,
       required: true
     }
}, {
    timestamps: true
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;
