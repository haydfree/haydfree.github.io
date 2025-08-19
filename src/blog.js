class BlogT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/blog.html");
        const html = await res.text();
        const wrapper = document.createElement("div");
        wrapper.innerHTML=html;

        const resB = await fetch("/posts/index.json");
        const index = await resB.json();
        const list = wrapper.querySelector(".blog-nav");
        for (let i = 0; i < index.postNum; i++) {
            const postDiv = document.createElement("li");
            const postLink = document.createElement("a");
            const post = index.posts[i];
            postDiv.classList.add("blog-nav-item");
            postLink.innerHTML = `${post.title} | ${post.date}`;
            postLink.setAttribute("href", `/posts/${i}.html`);
            postDiv.appendChild(postLink);
            list.appendChild(postDiv);
        }
        
        this.innerHTML=wrapper.innerHTML;

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
