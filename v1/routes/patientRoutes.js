const express = require('express');
const patientController = require('../../controllers/patientController');
const router = express.Router();

router.get('/', patientController.getAllPatients);

router.post('/', patientController.createPatient);

router.get('/:cedula', patientController.getPatientByCedula);

router.delete('/:cedula', patientController.deletePatientByCedula);

module.exports = router;

