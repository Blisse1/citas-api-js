const searchAllForm = document.getElementById('searchAllForm');
const appointmentsCedula = document.getElementById('appointmentsCedula');

searchAllForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const cedula = appointmentsCedula.value;
    const url = `/api/v1/appointments/cedula/${cedula}`;
    searchForm.action = url;
    searchForm.submit();
});


