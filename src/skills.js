import {flashElementsAll, delay} from '/src/utils.js';

class SkillsT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/skills.html");
        const html = await res.text();
        this.innerHTML = html;

        const fe = ".skill-category-title";
        let id = 0;
        if (this.querySelector(fe)) {
            flashElementsAll([fe]);
            id = setInterval(() => {flashElementsAll([fe]);}, delay);
        }
        document.dispatchEvent(new Event("componentsLoaded"));
    }
}

customElements.define("skills-t", SkillsT);
