const Car = require('../models/carmodel');

const getCars = async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCarsById = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCarsByName = async (req, res) => {
    try {
        const { name } = req.params;
        const cars = await Car.find({ name }); // Query cars by name
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCar = async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findByIdAndDelete(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCar = await Car.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCar) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCars, 
    getCarsById, 
    getCarsByName, // Add getCarsByName function
    createCar, 
    deleteCar, 
    updateCar,
};
