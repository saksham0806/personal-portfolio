// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelector('.nav-items');
    const body = document.body;
    
    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navItems.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }
    
    // Hamburger click event
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-items a').forEach(link => {
        link.addEventListener('click', function() {
            if (navItems.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.mobile-menu') && 
            navItems.classList.contains('active')) {
            toggleMenu();
        }
    });
});