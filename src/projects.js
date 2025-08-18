class ProjectsT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/projects.html");
        const html = await res.text();
        this.innerHTML = html;

        if (this.querySelector(".project-title")) {
            addRandomFlash([".project-title"]);
        }
    }
}

customElements.define("projects-t", ProjectsT);
