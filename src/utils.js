// flash effect
export const delay = 8000;
export function flashElement(selector) {
    const element = document.querySelector(selector);
    element.classList.add('flash');
    setTimeout(() => {element.classList.remove('flash')}, Math.random()*delay);
}

export function flashElementsAll(flashableElements) {
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

// typing effect
export function typeWriter(selector) {
    let i = 0;
    let element = document.querySelector(selector);
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





