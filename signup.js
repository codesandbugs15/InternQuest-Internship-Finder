document.addEventListener('DOMContentLoaded', function() {
    // Populate year dropdown
    const yearSelect = document.querySelector('select[name="year"]');
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 100; year <= currentYear - 13; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    // Populate day dropdown
    const daySelect = document.querySelector('select[name="day"]');
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day.toString().padStart(2, '0');
        option.textContent = day;
        daySelect.appendChild(option);
    }

    // Update days based on selected month and year
    function updateDays() {
        const month = document.querySelector('select[name="month"]').value;
        const year = yearSelect.value;
        const daySelect = document.querySelector('select[name="day"]');
        const selectedDay = daySelect.value;
        
        // Clear current days
        while (daySelect.firstChild) {
            daySelect.removeChild(daySelect.firstChild);
        }

        // Add placeholder
        const placeholder = document.createElement('option');
        placeholder.value = "";
        placeholder.textContent = "Day";
        placeholder.disabled = true;
        placeholder.selected = true;
        daySelect.appendChild(placeholder);

        // Calculate days in month
        let daysInMonth = 31;
        if (month) {
            daysInMonth = new Date(year, month, 0).getDate();
        }

        // Populate days
        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = day.toString().padStart(2, '0');
            option.textContent = day;
            if (option.value === selectedDay) {
                option.selected = true;
            }
            daySelect.appendChild(option);
        }
    }

    // Add event listeners for month and year changes
    document.querySelector('select[name="month"]').addEventListener('change', updateDays);
    yearSelect.addEventListener('change', updateDays);

    // Handle "Use email instead" link
    const useEmailLink = document.querySelector('.use-email');
    const phoneInput = document.querySelector('.phone-input');
    let isPhoneMode = true;

    useEmailLink.addEventListener('click', function(e) {
        e.preventDefault();
        const formGroup = phoneInput.closest('.form-group');
        const label = formGroup.querySelector('label');
        
        if (isPhoneMode) {
            // Switch to email
            label.textContent = 'Email';
            phoneInput.innerHTML = `<input type="email" id="email" name="email" placeholder="Enter your email" required>`;
            useEmailLink.textContent = 'Use phone instead';
        } else {
            // Switch to phone
            label.textContent = 'Phone Number';
            phoneInput.innerHTML = `
                <div class="country-select">
                    <img src="assets/flags/us.svg" alt="US Flag">
                    <span>+1</span>
                </div>
                <input type="tel" id="phone" name="phone" placeholder="(234) 567-890" required>
            `;
            useEmailLink.textContent = 'Use email instead';
        }
        isPhoneMode = !isPhoneMode;
    });

    // Handle form submission
    document.querySelector('.signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });

    // Handle close button
    document.querySelector('.close-button').addEventListener('click', function() {
        // Add your close logic here
        console.log('Close clicked');
    });
}); 