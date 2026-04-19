document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
    
    // Trigger initial reveals immediately for above-the-fold content
    setTimeout(() => {
        const initialReveals = document.querySelectorAll('.hero .reveal');
        initialReveals.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('active');
            }, index * 150); // cascading delay
        });
    }, 100);
});
