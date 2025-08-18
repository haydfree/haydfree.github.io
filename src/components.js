async function loadNav() {
    const res = await fetch("components/nav.html");
    const navData = await res.text();

    let nav = document.querySelector(".nav-placeholder"); 
    nav.innerHTML+=navData;
}

async function loadFooter() {
    const res = await fetch("components/footer.html");
    const footerData = await res.text();

    let footer = document.querySelector(".footer-placeholder"); 
    footer.innerHTML+=footerData;
}

async function loadContact() {
    const res = await fetch("components/contact.html");
    const contactData = await res.text();

    let contact = document.querySelector(".contact-placeholder"); 
    contact.innerHTML+=contactData;
}

async function loadHero() {
    const res = await fetch("components/hero.html");
    const heroData = await res.text();

    let hero = document.querySelector(".hero-placeholder"); 
    hero.innerHTML+=heroData;
}

async function loadAllComponents() {
    await loadNav();
    await loadHero();
    await loadContact();
    await loadFooter();

    document.dispatchEvent(new CustomEvent('componentsLoaded'));
}

document.addEventListener('DOMContentLoaded', loadAllComponents);
