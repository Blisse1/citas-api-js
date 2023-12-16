const Appointment = require('../models/appointmentModel');
const Patient = require('../models/patientModel');
const Doctor = require('../models/doctorModel');

const appointmentService = {
    getAllAppointments: async () => {
        try {
            const appointments = await Appointment.find();
            return appointments;
        } catch (error) {
            throw new Error('Error, cannot get appointments');
        }
    },

    createAppointment: async (appointmentData) => {
        try {
            const {cedula,date,speciality, doctorName, patientName}= appointmentData;
            const existingAppointment = await Appointment.findOne({speciality:speciality, date:date, cedula:cedula});
            const existingPatient = await Patient.findOne({cedula:cedula});
            const existingDoctor = await Doctor.findOne({speciality:speciality});
            if(existingAppointment){
                return;
            }else if(existingPatient && existingDoctor){
                const newAppointment = new Appointment({cedula,date,speciality, doctorName:existingDoctor.firstName, patientName:existingPatient.firstName});
                await newAppointment.save();
                return newAppointment; 
            }
        } catch (error) {
            throw new Error('Error al crear la cita.');
        }
    },

    getAppointmentById: async (userId) => {
        try {
            const appointment = await Appointment.findById(userId);
            if (appointment) {
                return appointment;
            } else {
                throw new Error('Appointment no encontrado.');
            }
        } catch (error) {
            throw new Error('Error al obtener el appointment.');
        }
    },
    getAllAppointmentsByCedula: async (appointmentsByCedula) => {
        try {
            const appointments = await Appointment.find({cedula:appointmentsByCedula});
            if(appointments){
                return appointments;
            }else {
                throw new Error("Citas no encontradas");
            }
        } catch (error) {
            throw new Error('Error al obtener los appointments.');
        }
    },
};

module.exports = appointmentService;



