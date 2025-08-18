// flash effect
const delay = 8000;
function addRandomFlash(flashableElements) {
    if (!flashableElements) {
        flashableElements = ['.section-title', '.project-title', '.timeline-title', 
            '.education-institution', '.skill-category-title', '.nav-link', '.nav-logo a']
    }
    flashableElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (Math.random() < 0.75) {
                el.classList.add('flash');
                setTimeout(() => {
                    el.classList.remove('flash');
                }, Math.random() * delay);
            }
        });
    });
}
setInterval(() => addRandomFlash(), delay);

// typing effect
function typeWriter(element) {
    let i = 0;
    const text = element.textContent;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

// TODO: add email forwarding
function formSubmit(e) {
    if (e.target.id !== "contact-form") {return;}
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    if (name && email && subject && message) {
        alert('MESSAGE TRANSMITTED TO THE STACK-SMASH OVERLORD\n\nYour message has been logged in the terminal. Expect a response when the low-level gods smile upon us.');
        e.target.reset();
    } else {
        alert('ERROR: MISSING REQUIRED FIELDS\n\nAll fields must be filled to communicate with the stack master.');
    }
}

// easter egg console.logs + ctf challenge 
function easterEggs() {
    console.log('='.repeat(60));
    console.log('STACK-SMASH TERMINAL INITIALIZED');
    console.log('='.repeat(60));
    console.log('Welcome to haydfree.com');
    console.log('Built with raw HTML/CSS/JS because frameworks are for the weak');
    console.log('There is a vulnerability intentionally added somewhere in this website.');
    console.log('Can you find the flag? or are you trash?');
    console.log('='.repeat(60));
}

document.addEventListener('submit', function(e) {
    formSubmit(e);
});
