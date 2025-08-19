import {flashElementsAll, delay} from '/src/utils.js';

class ExperienceT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/experience.html");
        const html = await res.text();
        this.innerHTML = html;

        const fe = ".timeline-title";
        let id = 0;
        if (this.querySelector(fe)) {
            flashElementsAll([fe]);
            id = setInterval(() => {flashElementsAll([fe]);}, delay);
        }
        document.dispatchEvent(new Event("componentsLoaded"));
    }
}

class ExperienceStaticT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/experience.html");
        const html = await res.text();
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;

        const header = wrapper.querySelector(".section-title").outerHTML;
        const content = wrapper.querySelector(".timeline-content");
        content.querySelector(".timeline-description").remove();
        this.innerHTML = header+content.outerHTML;

        const fe = ".timeline-title";
        let id = 0;
        if (this.querySelector(fe)) {
            flashElementsAll([fe]);
            id = setInterval(() => {flashElementsAll([fe]);}, delay);
        }
        document.dispatchEvent(new Event("componentsLoaded"));
    }
}

customElements.define("experience-t", ExperienceT);
customElements.define("experience-static-t", ExperienceStaticT);
