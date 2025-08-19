import {flashElementsAll} from '/src/utils.js';

class NavT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/nav.html");
        const html = await res.text();
        this.innerHTML = html;
        
        this.querySelector("#hamburger")?.addEventListener("click", () => {
            this.querySelector("#nav-menu")?.classList.toggle("active");
        });

        const fes = [".nav-link", ".nav-logo a"];
        flashElementsAll([fes]);
    }
}

customElements.define("nav-t", NavT);
