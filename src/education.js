import {flashElementsAll} from '/src/utils.js';

class EducationT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/education.html");
        const html = await res.text();
        this.innerHTML = html;

        const fe = ".education-institution";
        if (this.querySelector(fe)) {flashElementsAll([fe]);}
    }
}

customElements.define("education-t", EducationT);
