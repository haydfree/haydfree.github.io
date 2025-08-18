class AboutT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/about.html");
        const html = await res.text();
        this.innerHTML = html;
    }
}

customElements.define("about-t", AboutT);
