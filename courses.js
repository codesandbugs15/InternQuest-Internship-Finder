document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    const pages = document.querySelectorAll('.course-page');
    let currentPage = 0;

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage);
        });
    }

    function updatePages() {
        pages.forEach((page, index) => {
            page.classList.toggle('active', index === currentPage);
        });
    }

    function navigateToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < pages.length) {
            currentPage = pageIndex;
            updateDots();
            updatePages();
            
            // Update button states
            prevBtn.disabled = currentPage === 0;
            nextBtn.disabled = currentPage === pages.length - 1;
        }
    }

    prevBtn.addEventListener('click', () => {
        navigateToPage(currentPage - 1);
    });

    nextBtn.addEventListener('click', () => {
        navigateToPage(currentPage + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            navigateToPage(index);
        });
    });

    // Course card hover effects
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Initial setup
    updateDots();
    updatePages();
    prevBtn.disabled = true;
}); 