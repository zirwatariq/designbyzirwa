// JavaScript for fade-in effect
const sections = document.querySelectorAll('.fade-in');

const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value based on when you want the animation to trigger
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
