async function loadAllComponents() {
    const componentList = [
        'nav','hero','about','skills','projects','experience','education','contact','footer'
    ];
    for (const section of componentList) {
        const res = await fetch(`components/${section}.html`);
        const data = await res.text();
        let h = document.querySelector(`.${section}-placeholder`);
        h.innerHTML+=data;
    }

    document.dispatchEvent(new CustomEvent('componentsLoaded'));
}

document.addEventListener('DOMContentLoaded', loadAllComponents);
