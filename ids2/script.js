const calendarGrid = document.getElementById('calendar-grid');
const currentMonthElement = document.getElementById('current-month');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date().getDate(); 

    currentMonthElement.textContent = months[month] + ' ' + year;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    calendarGrid.innerHTML = '';

    const weekdays = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekdays.forEach(weekday => {
        const weekdayCell = document.createElement('div');
        weekdayCell.classList.add('day', 'weekday');
        weekdayCell.textContent = weekday;
        calendarGrid.appendChild(weekdayCell);
    });
    
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.textContent = day;
        if (day === today) {
            dayCell.classList.add('current-day');
        }
        dayCell.addEventListener('click', () => {
            toggleMeetingDetails(dayCell, date);
        });
        calendarGrid.appendChild(dayCell);
        }
}

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

function toggleMeetingDetails(dayCell, date) {
    const existingDetails = dayCell.querySelector('.meeting-details');

    if (existingDetails) {
        existingDetails.remove();
    } else {
        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('meeting-details');
        detailsContainer.innerHTML = `
            <p><strong>${date.toDateString()}</strong></p>
            <!-- You can add more details here, such as meetings, start/end times, etc. -->
        `;

        dayCell.appendChild(detailsContainer);
    }
}

const meetingDateInput = document.getElementById('meeting-date');
const startTimeInput = document.getElementById('start-time');
const endTimeInput = document.getElementById('end-time');
const locationInput = document.getElementById('location');
const createMeetingButton = document.getElementById('create-meeting-btn');

createMeetingButton.addEventListener('click', () => {
    const meetingDate = meetingDateInput.value;
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;
    const location = locationInput.value;

    console.log('Meeting Date:', meetingDate);
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
    console.log('Location:', location);
});
