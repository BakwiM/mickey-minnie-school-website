document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        console.error("Navbar elements not found");
        return;
    }

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
