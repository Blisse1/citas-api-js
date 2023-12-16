const Patient = require('../models/patientModel');

const patientService = {
  getAllPatients: async () => {
    try {
      const patients = await Patient.find();
      return patients;
    } catch (error) {
      throw new Error('Error, cannot get patients');
    }
  },

  createPatient: async (patientData) => {
    try {
        const { firstName, lastName, cedula, phone, age } = patientData;
        const existingPatient = await Patient.findOne({cedula:cedula});
        if (existingPatient){
            return; 
        }else {
            const newPatient = new Patient({ firstName, lastName, cedula, phone, age});
            await newPatient.save();
            return newPatient;
    }
    } catch (error) {
        throw new Error('Error al crear el paciente.');
    }
  },

  getPatientByCedula: async (patientCedula) => {
    try {
      const patient = await Patient.findOne({cedula:patientCedula});
      if (patient) {
        return patient;
      } else {
        throw new Error('Paciente no encontrado.');
      }
    } catch (error) {
      throw new Error('Error al obtener el paciente.');
    }
  },
    deletePatientByCedula: async (cedula) => {
        try {
            const deletedPatient = await Patient.findOneAndDelete({cedula:cedula});
            if (deletedPatient) {
                return "Patient deleted";
            } else {
                throw new Error('Paciente no encontrado.');
            }
        } catch (error) {
            throw new Error('Error al eliminar el paciente.');
        }
    },

};

module.exports = patientService;

