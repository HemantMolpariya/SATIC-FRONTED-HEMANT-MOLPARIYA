document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('hamburger');
    const navMenu = document.getElementById('navLinks');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // This toggles the visibility on mobile
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link (important for mobile UX)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(3, 7, 18, 1)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(3, 7, 18, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
});
