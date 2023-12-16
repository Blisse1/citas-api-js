const searchForm = document.getElementById('searchForm');
const appointmentId = document.getElementById('appointmentId');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const appointment = appointmentId.value;
    const url = `/api/v1/appointments/${appointment}`;
    searchForm.action = url;
    searchForm.submit();
});

