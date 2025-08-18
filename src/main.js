document.addEventListener('click', function(e) {
    // mobile nav
    if (e.target.id === 'hamburger') { 
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('active');
    }

    if (e.target.classList.contains('nav-link')) {
        const navMenu = document.getElementById('nav-link');
        if (navMenu) navMenu.classList.remove('active');
        
        // smooth scrolling cuz apparently this is a thing
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
});

// flash effect
function addRandomFlash(flashableElements) {
    flashableElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        if (!elements) {return;}
        elements.forEach(el => {
            if (!el) {return;}
            if (Math.random() < 0.75) {
                el.classList.add('flash');
                setTimeout(() => {
                    el.classList.remove('flash');
                }, 3000 + Math.random() * 5000);
            }
        });
    });
}
setInterval(addRandomFlash, 8000);
setTimeout(addRandomFlash, 2000);

// typing effect
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

document.addEventListener('componentsLoaded', () => {
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) {
        const originalText = heroDesc.textContent;
        typeWriter(heroDesc, originalText, 30);
    }
    const flashableElements = [
        '.hero-subtitle','.section-title','.timeline-title','.project-title'
    ];
    const feh = document.querySelectorAll(flashableElements); 
    if (feh) addRandomFlash(flashableElements);
});

// TODO: add email forwarding
document.addEventListener('submit', function(e) {
    if (e.target.id !== "contact-form") {return;}
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    
    if (name && email && subject && message) {
        alert('MESSAGE TRANSMITTED TO THE STACK-SMASH OVERLORD\n\nYour message has been logged in the terminal. Expect a response when the low-level gods smile upon us.');
        this.reset();
    } else {
        alert('ERROR: MISSING REQUIRED FIELDS\n\nAll fields must be filled to communicate with the stack master.');
    }
});

// easter egg console.logs + ctf challenge 
console.log('='.repeat(60));
console.log('STACK-SMASH TERMINAL INITIALIZED');
console.log('='.repeat(60));
console.log('Welcome to haydfree.com');
console.log('Built with raw HTML/CSS/JS because frameworks are for the weak');
console.log('There is a vulnerability intentionally added somewhere in this website.');
console.log('Can you find the flag? or are you trash?');
console.log('='.repeat(60));
