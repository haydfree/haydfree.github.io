import {flashElementsAll} from '/src/utils.js';

class SkillsT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/skills.html");
        const html = await res.text();
        this.innerHTML = html;

        const fe = ".skill-category-title";
        if (this.querySelector(fe)) {flashElementsAll([fe]);}
    }
}

customElements.define("skills-t", SkillsT);
