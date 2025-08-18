class HeroT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/hero.html");
        const html = await res.text();
        this.innerHTML = html;

        const e = this.querySelector(".hero-description");
        if (e) typeWriter(e);
    }
}

customElements.define("hero-t", HeroT);
