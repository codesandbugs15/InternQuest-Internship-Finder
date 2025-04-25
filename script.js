document.addEventListener('DOMContentLoaded', () => {
    // --- Stipend Range Slider Value Display ---
    const stipendSlider = document.getElementById('stipend');
    const stipendValueDisplay = document.getElementById('stipend-value');

    if (stipendSlider && stipendValueDisplay) {
        // Function to update the display
        const updateStipendValue = () => {
            // Format the value nicely (e.g., with commas) - basic version here
            const value = parseInt(stipendSlider.value).toLocaleString('en-IN'); // For Indian numbering system
            stipendValueDisplay.textContent = ₹${value};
        };

        // Initial display update
        updateStipendValue();

        // Update display when slider value changes
        stipendSlider.addEventListener('input', updateStipendValue);
    }

    // --- Basic Hover Class Toggling (Example - Optional) ---
    // You can add classes on hover/click for more complex CSS animations
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Example: Add a class for a JS-driven animation if needed
            // card.classList.add('js-hover-active');
        });
        card.addEventListener('mouseleave', () => {
            // card.classList.remove('js-hover-active');
        });
    });

    // --- Filter Tag Activation (Example) ---
    const quickFilterTags = document.querySelectorAll('.quick-filters .filter-tag');
    quickFilterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Remove 'active' class from all tags first (optional, if only one active)
             quickFilterTags.forEach(t => t.classList.remove('active'));
            // Add 'active' class to the clicked tag
             tag.classList.add('active');
             // Add actual filtering logic here later
             console.log(Filter activated: ${tag.textContent});
        });
    });

     // --- Remove Profile Tag (Example) ---
     const removeTagButtons = document.querySelectorAll('.remove-tag');
     removeTagButtons.forEach(button => {
         button.addEventListener('click', (event) => {
             const tagElement = event.target.closest('.tag');
             if (tagElement) {
                 tagElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                 tagElement.style.opacity = '0';
                 tagElement.style.transform = 'scale(0.8)';
                 // Remove the element after the animation completes
                 setTimeout(() => {
                     tagElement.remove();
                     // Add logic here to update filters if needed
                 }, 300); // Match transition duration
             }
         });
     });

    // Get all Apply buttons
    const applyButtons = document.querySelectorAll('.btn-primary');
    const popup = document.getElementById('applyPopup');

    // Add click event to each Apply button
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Show popup
            popup.classList.add('show');
            
            // Hide popup after 3 seconds
            setTimeout(() => {
                popup.classList.remove('show');
            }, 3000);
        });
    });

    console.log("Page loaded and scripts running.");
});