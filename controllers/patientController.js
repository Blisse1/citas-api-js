const patientService = require('../services/patientService');

const patientController = {
    getAllPatients: async (req, res) => {
        try {
            const patients = await patientService.getAllPatients();
            res.render("patientsList", {patients:patients});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createPatient: async (req, res) => {
        try {
            const { firstName, lastName, phone, cedula, age } = req.body;
            const newPatient = await patientService.createPatient({ firstName, lastName, phone, cedula, age });
            if (newPatient === undefined){
                res.render("duplicado");
            }else{
            res.redirect("/api/v1/patients");
        }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getPatientByCedula: async (req, res) => {
        try {
            const { cedula } = req.params;
            const patient = await patientService.getPatientByCedula(cedula);
            res.render("onePatientList", {patient:patient});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deletePatientByCedula: async (req, res) => {
        try {
            const { cedula } = req.params;
            const deletedPatient = await patientService.deletePatientByCedula(cedula);
            if (deletedPatient) {
                res.send("Paciente Eliminado Correctamente");
            } else {
                res.status(404).json({ error: 'Usuario no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

};

module.exports = patientController;

