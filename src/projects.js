import {flashElementsAll} from '/src/utils.js';

class ProjectsT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/projects.html");
        const html = await res.text();
        this.innerHTML = html;

        const fe = ".project-title";
        if (this.querySelector(fe)) {flashElementsAll([fe]);}
    }
}

class ProjectT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/projects.html");
        const html = await res.text();
        const project = this.getAttribute("project");
         
        const cards = document.querySelectorAll("project-cards"); 
        for (const card of cards) {
            const h3 = card.querySelector(".project-title");
            if (h3.textContent.trim() === project) {
                this.innerHTML += card.innerHTML; 
                break;
            }
        }
    }
}

customElements.define("projects-t", ProjectsT);
customElements.define("project-t", ProjectT);
