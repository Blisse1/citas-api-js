const express = require('express');
const router = express.Router();
const appointmentController = require('../../controllers/appointmentController');

router.get('/', appointmentController.getAllAppointments);

router.get('/cedula/:cedula', appointmentController.getAllAppointmentsByCedula);

router.post('/', appointmentController.createAppointment);

router.get('/:id', appointmentController.getAppointmentById);

module.exports = router;

