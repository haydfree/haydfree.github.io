class NavT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/nav.html");
        const html = await res.text();
        this.innerHTML = html;
        
        this.querySelector("#hamburger")?.addEventListener("click", () => {
            this.querySelector("#nav-menu")?.classList.toggle("active");
        });

        if (this.querySelector(".nav-link")) {
            addRandomFlash([".nav-link"]);
        }

        if (this.querySelector(".nav-logo a")) {
            addRandomFlash([".nav-logo a"]);
        }
    }
}

customElements.define("nav-t", NavT);
