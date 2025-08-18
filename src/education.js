class EducationT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/education.html");
        const html = await res.text();
        this.innerHTML = html;

        if (this.querySelector(".education-institution")) {
            addRandomFlash([".education-institution"]);
        }
    }
}

customElements.define("education-t", EducationT);
