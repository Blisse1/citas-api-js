const express = require('express');
const router = express.Router();
const doctorController = require('../../controllers/doctorController');

router.get('/', doctorController.getAllDoctors);

router.post('/', doctorController.createDoctor);

router.get('/:cedula', doctorController.getDoctorByCedula);

module.exports = router;

