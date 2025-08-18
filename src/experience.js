class ExperienceT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/experience.html");
        const html = await res.text();
        this.innerHTML = html;

        if (this.querySelector(".timeline-title")) {
            addRandomFlash([".timeline-title"]);
        }
    }
}

customElements.define("experience-t", ExperienceT);
