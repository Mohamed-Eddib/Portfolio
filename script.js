document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log('Checking element:', entry.target); // Debug line
            if (entry.isIntersecting) {
                console.log('Visible! Adding class...'); // Debug line
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.About');
    fadeElements.forEach(el => observer.observe(el));
});
