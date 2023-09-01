const express = require('express');
const router = express.Router();
const medicineController = require('../app/controllers/MedicineController');

router.get('/', medicineController.findAll);

module.exports = router;
