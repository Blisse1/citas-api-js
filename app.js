const express = require('express');
const app = express();

// Requiring Main Routes
const patientRoutes = require('./v1/routes/patientRoutes');
const doctorRoutes = require('./v1/routes/doctorRoutes');
const appointmentRoutes = require('./v1/routes/appointmentRoutes');

// Requiring Form Routes
const patientFormRout = require('./v1/routes/patientFormRout');
const doctorFormRout = require('./v1/routes/doctorFormRout');
const appointmentFormRout = require('./v1/routes/appointmentFormRout');
const homeRout = require('./v1/routes/homeRout');

const connectToDb = require('./db');

connectToDb()
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor en ejecución en el puerto 3000');
        });
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Using Main Routes
app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/doctors', doctorRoutes);
app.use('/api/v1/appointments', appointmentRoutes);

// Using Form Routes 
app.use('/api/v1/patientsForm', patientFormRout);
app.use('/api/v1/doctorsForm', doctorFormRout);
app.use('/api/v1/appointmentsForm', appointmentFormRout);
app.use('/api/v1/home', homeRout);


