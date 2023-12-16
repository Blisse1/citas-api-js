const appointmentService = require('../services/appointmentService');

const appointmentController = {
    getAllAppointments: async (req, res) => {
        try {
            const appointments = await appointmentService.getAllAppointments();
            res.render("appointmentsList",{appointments:appointments});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createAppointment: async (req, res) => {
        try {
            const {cedula, date, speciality, doctorName, patientName} = req.body;
            const newAppointment = await appointmentService.createAppointment({cedula, date, speciality, doctorName, patientName});
            if(newAppointment === undefined){
                res.send("El doctor ya se encuentra agendado para una cita");
            }else {
                res.redirect("/api/v1/appointments");
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAppointmentById: async (req, res) => {
        try {
            const { id } = req.params;
            const appointment = await appointmentService.getAppointmentById(id);
            res.render("oneAppointment", {appointment:appointment});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllAppointmentsByCedula: async (req, res) => {
        try {
            const { cedula } = req.params;
            const appointments = await appointmentService.getAllAppointmentsByCedula(cedula);
            res.render("appointmentsByCedula", {appointments:appointments});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

};

module.exports = appointmentController;



