import {typeWriter} from '/src/utils.js';

class HeroT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/hero.html");
        const html = await res.text();
        this.innerHTML = html;

        const fe = ".hero-description";
        if (this.querySelector(fe)) {typeWriter(fe);}
    }
}

customElements.define("hero-t", HeroT);
