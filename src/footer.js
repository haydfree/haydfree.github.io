class FooterT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/footer.html");
        const html = await res.text();
        this.innerHTML = html;
    }
}

customElements.define("footer-t", FooterT);
