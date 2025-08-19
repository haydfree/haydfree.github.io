import {flashElementsAll, delay} from '/src/utils.js';

class AboutT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/about.html");
        const html = await res.text();
        this.innerHTML = html;

        document.dispatchEvent(new Event("componentsLoaded"));
    }
}

customElements.define("about-t", AboutT);
