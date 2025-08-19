import {flashElementsAll, delay} from '/src/utils.js';

class ProjectsT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/projects.html");
        const html = await res.text();
        this.innerHTML = html;

        const fe = ".project-title";
        let id = 0;
        if (this.querySelector(fe)) {
            flashElementsAll([fe]);
            id = setInterval(() => {flashElementsAll([fe]);}, delay);
        }
        document.dispatchEvent(new Event("componentsLoaded"));
    }
}

class ProjectT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/projects.html");
        const html = await res.text();
        const project = this.getAttribute("project");
        let wrapper = document.createElement("div");
        wrapper.innerHTML = html;
         
        const cards = wrapper.querySelectorAll(".project-card"); 
        for (const card of cards) {
            const h3 = card.querySelector(".project-title");
            if (h3.textContent.trim() === project) {
                this.innerHTML = card.outerHTML + this.innerHTML;
                break;
            }
        }

        const fe = ".project-title";
        let id = 0;
        if (this.querySelector(fe)) {
            flashElementsAll([fe]);
            id = setInterval(() => {flashElementsAll([fe]);}, delay);
        }
        document.dispatchEvent(new Event("componentsLoaded"));
    }
}

customElements.define("projects-t", ProjectsT);
customElements.define("project-t", ProjectT);
