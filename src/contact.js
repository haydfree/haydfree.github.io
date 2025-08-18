class ContactT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/contact.html");
        const html = await res.text();
        this.innerHTML = html;
    }
}

customElements.define("contact-t", ContactT);
