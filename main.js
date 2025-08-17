// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Random flashing text effect for fun elements
function addRandomFlash() {
    const flashableElements = [
        '.hero-subtitle',
        '.section-title',
        '.timeline-title',
        '.project-title'
    ];
    
    flashableElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (Math.random() < 0.3) {
                el.classList.add('flash');
                setTimeout(() => {
                    el.classList.remove('flash');
                }, 3000 + Math.random() * 5000);
            }
        });
    });
}

// Add random flashing every few seconds
setInterval(addRandomFlash, 8000);

// Initial flash on load
setTimeout(addRandomFlash, 2000);

// Typing effect for hero description (because why not)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect to description on load
window.addEventListener('load', () => {
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) {
        const originalText = heroDesc.textContent;
        typeWriter(heroDesc, originalText, 30);
    }
});

// Contact form submission (basic alert since no backend)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        alert('MESSAGE TRANSMITTED TO THE STACK-SMASH OVERLORD\n\nYour message has been logged in the terminal. Expect a response when the low-level gods smile upon us.');
        this.reset();
    } else {
        alert('ERROR: MISSING REQUIRED FIELDS\n\nAll fields must be filled to communicate with the stack master.');
    }
});

// Add some console messages for the true low-level devs who check
console.log('='.repeat(60));
console.log('STACK-SMASH TERMINAL INITIALIZED');
console.log('='.repeat(60));
console.log('Welcome to haydfree.com');
console.log('Built with raw HTML/CSS/JS because frameworks are for the weak');
console.log('Check the source if you want to see some real code');
console.log('='.repeat(60));
