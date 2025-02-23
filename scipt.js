// JavaScript: script.js

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const images = document.querySelectorAll('.project-image');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });

    images.forEach((image, index) => {
        const imageTop = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (imageTop < windowHeight * 0.75) {
            image.style.opacity = 1;
            image.style.transform = 'translateY(0)';
            image.style.transitionDelay = `${index * 0.2}s`;
        }
    });
});
/* JavaScript for Timeline Scroll Animation */
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const revealTimelineItems = () => {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (itemTop < windowHeight * 0.8) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    };
    window.addEventListener('scroll', revealTimelineItems);
    revealTimelineItems();
});
/* JavaScript for Contact Form Validation */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = contactForm.querySelector('input[name="email"]');
        const message = contactForm.querySelector('textarea[name="message"]');
        if (email.value.trim() === '' || message.value.trim() === '') {
            alert('Please fill out all fields.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });
});
// JavaScript for Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = contactForm.querySelector('input[name="email"]');
        const message = contactForm.querySelector('textarea[name="message"]');
        if (email.value.trim() === '' || message.value.trim() === '') {
            alert('Please fill out all fields.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });
});
