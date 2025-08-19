import {flashElementsAll, delay} from '/src/utils.js';

class EducationT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/education.html");
        const html = await res.text();
        this.innerHTML = html;

        const fe = ".education-institution";
        let id = 0;
        if (this.querySelector(fe)) {
            flashElementsAll([fe]);
            id = setInterval(() => {flashElementsAll([fe]);}, delay);
        }
        document.dispatchEvent(new Event("componentsLoaded"));
    }
}

customElements.define("education-t", EducationT);
