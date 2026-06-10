
function subscribeNewsletter() {
    let email = document.getElementById("footerEmail").value;
    
    if (email === "") {
        alert("Please enter a valid email address.");
    } else {
        localStorage.setItem("newsletterEmail", email);
        alert("Subscribed Successfully! Thank you for joining TravelNest.");
        document.getElementById("footerEmail").value = "";
    }
}


function closeMobileNav() {
    const btn  = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('navMenu');

    if (menu) menu.classList.remove('open');
    if (btn) {
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    }
}

function toggleMobileNav() {
    const btn  = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('navMenu');

    if (!btn || !menu) return;

    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#navMenu a').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });
});


window.subscribeNewsletter = subscribeNewsletter;
window.toggleMobileNav = toggleMobileNav;
