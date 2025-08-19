import {flashElementsAll, delay} from '/src/utils.js';

class NavT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/nav.html");
        const html = await res.text();
        this.innerHTML = html;
        
        this.querySelector("#hamburger")?.addEventListener("click", () => {
            this.querySelector("#nav-menu")?.classList.toggle("active");
        });

        const fes = [".nav-link", ".nav-logo a"];
        let id = 0;
        if (this.querySelectorAll(fes)) {
            flashElementsAll(fes);
            id = setInterval(() => {flashElementsAll(fes);}, delay);
        }
    }
}

customElements.define("nav-t", NavT);
