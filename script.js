document.addEventListener('DOMContentLoaded', () => {
    const indicatorElement = document.querySelector('.indicator'); // Target the indicator element
    const dayElement = document.querySelector('.day'); // Target the day status element
    const timeElement = document.querySelector('.time'); // Target the time display element

    function updateUI() {
        const now = new Date();
        const day = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
        const hour = now.getHours(); // Current hour (0–23)
        const minutes = now.getMinutes(); // Current minutes
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Format time to HH:MM (e.g., 08:05 or 15:45)
        const formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        // Update day and time display
        dayElement.textContent = ` ${dayNames[day]}`;
        timeElement.textContent = ` ${formattedTime}`;

        // Update background color based on day and time
        if (day === 0 || day === 6) {
            // Saturdays and Sundays
            indicatorElement.style.backgroundColor = 'red';
            dayElement.textContent += ' - Weekend';
        } else if (day >= 1 && day <= 4) {
            // Monday to Thursday
            if (hour >= 8 && hour < 11) {
                dayElement.textContent =  `OPEN ${dayNames[day]}`;
                indicatorElement.style.backgroundColor = 'green';
            } else if (hour >= 11 && hour < 13) {
                indicatorElement.style.backgroundColor = 'red';
                dayElement.textContent = `CLOSED ${dayNames[day]}` ;
            } else if (hour >= 13 && hour < 16) {
                indicatorElement.style.backgroundColor = 'green';
                dayElement.textContent = `OPEN ${dayNames[day]}`;
            } else {
                indicatorElement.style.backgroundColor = 'red';
                dayElement.textContent =  `CLOSED ${dayNames[day]}`;
                 // Default background
            }
        } else if (day === 5) {
            // Friday
            if (hour >= 8 && hour < 14) {
                indicatorElement.style.backgroundColor = 'green';
                dayElement.textContent = `OPEN ${dayNames[day]}`;
            } else {
                indicatorElement.style.backgroundColor = 'red';
                dayElement.textContent = `CLOSED ${dayNames[day]}`; // Default background
            }
        }
    }

    // Update UI initially and every minute
    updateUI();
    setInterval(updateUI, 60000); // Check every minute
});
