import {typeWriter} from '/src/utils.js';

class HeroT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/hero.html");
        const html = await res.text();
        this.innerHTML = html;

        const te = ".hero-description";
        if (this.querySelector(te)) {typeWriter(te);}
    }
}

customElements.define("hero-t", HeroT);
