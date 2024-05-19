const express = require("express");
const router = express.Router();
const { getCars, getCarsById, createCar, updateCar, deleteCar, getCarsByName } = require('../controllers/carcontroller');


router.get('/:name', getCarsByName); 
router.get('/:id', getCarsById); 
router.get('/', getCars); 
router.post('/', createCar); 
router.put('/:id', updateCar); 
router.delete('/:id', deleteCar); 

module.exports = router;
