class BlogT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/blog.html");
        const html = await res.text();
        const wrapper = document.createElement("div");
        wrapper.innerHTML=html;
        this.innerHTML=wrapper.outerHTML;

        document.dispatchEvent(new Event("componentsLoaded"));
    }
}

class BlogStaticT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/blog.html");
        const html = await res.text();
        const wrapper = document.createElement("div");
        wrapper.innerHTML=html;
        const header = wrapper.querySelector(".section-title");
        const content = wrapper.querySelector(".blog-content");

        this.innerHTML = header.outerHTML + content.outerHTML;

        document.dispatchEvent(new Event("componentsLoaded"));
    }
}

customElements.define("blog-t", BlogT);
customElements.define("blog-static-t", BlogStaticT);
