class ReadMoreBtnT extends HTMLElement {
    async connectedCallback() {
        const res = await fetch("/components/read-more-btn.html");
        const html = await res.text();
        const href = this.getAttribute("href");
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        let a = wrapper.querySelector("a");
        if (a) a.href = href;
        this.innerHTML = wrapper.innerHTML;
    }
}

customElements.define("read-more-btn-t", ReadMoreBtnT);
