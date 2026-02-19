const content = document.getElementById('main-content');

function toggleTheme() {
    const body = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        btn.innerText = 'MODE CLAIR';
    } else {
        body.setAttribute('data-theme', 'light');
        btn.innerText = 'MODE SOMBRE';
    }
}

function setActiveNav(id) {
    document.querySelectorAll('.nav-links span').forEach(el => el.classList.remove('active'));
    if (id) {
        document.getElementById(id).classList.add('active');
    }
}

function closeModal() { document.getElementById('modal').style.display = 'none'; }

// Chargement initial
renderHome();