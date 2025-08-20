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
    let div = document.querySelector(selector);
    let vis = document.createElement("div");
    let hid = document.createElement("div");
    const text = div.textContent;
    hid.classList.add("hidden");
    div.innerHTML = "";
    vis.innerHTML  = "";
    hid.innerHTML = text;
    div.appendChild(vis);
    div.appendChild(hid);
    function type() {
        if (i < text.length) {
            hid.innerHTML = text.slice(i); 
            vis.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 10);
        }
    }
    type();
}





