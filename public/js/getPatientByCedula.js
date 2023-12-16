const searchForm = document.getElementById('searchForm');
const patientCedula = document.getElementById('patientCedula');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const cedula = patientCedula.value;
    const url = `/api/v1/patients/${cedula}`;
    searchForm.action = url;
    searchForm.submit();
});

