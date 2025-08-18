class SkillsT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/skills.html");
        const html = await res.text();
        this.innerHTML = html;

        if (this.querySelector(".skill-category-title")) {
            addRandomFlash([".skill-category-title"]);
        }
    }
}

customElements.define("skills-t", SkillsT);
