class BlogT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/blog.html");
        const html = await res.text();
        this.innerHTML = html;
    }
}

customElements.define("blog-t", BlogT);
