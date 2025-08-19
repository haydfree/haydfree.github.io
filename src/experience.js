import {flashElementsAll} from '/src/utils.js';

class ExperienceT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/experience.html");
        const html = await res.text();
        this.innerHTML = html;

        const fe = ".timeline-title";
        if (this.querySelector(fe)) {flashElementsAll([fe]);}
    }
}

customElements.define("experience-t", ExperienceT);
