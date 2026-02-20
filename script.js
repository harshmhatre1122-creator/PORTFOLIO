document.addEventListener("DOMContentLoaded", function () {

/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });

    // Close menu after clicking link
    const navLinks = mobileNav.querySelectorAll("a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileNav.classList.remove("active");
        });
    });
}

    /* ================= AOS INIT ================= */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    /* ================= TYPING EFFECT ================= */
    const textArray = [
        "AR/VR Developer",
        "Unity Specialist",
        "AI Explorer",
        "Web Innovator"
    ];

    let index = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing");

    function typeEffect() {
        if (!typingElement) return;

        if (charIndex < textArray[index].length) {
            typingElement.textContent += textArray[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 80);
        } else {
            setTimeout(eraseEffect, 1500);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typingElement.textContent =
                textArray[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 40);
        } else {
            index = (index + 1) % textArray.length;
            setTimeout(typeEffect, 400);
        }
    }

    typeEffect();

    /* ================= PARTICLES ================= */
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: { value: 70 },
                size: { value: 3 },
                color: { value: "#00f2ff" },
                line_linked: { enable: true, color: "#6a5cff" }
            }
        });
    }

    /* ================= PROJECT FLIP (CLICK) ================= */
    const cards = document.querySelectorAll(".flip-card");

    cards.forEach(card => {
        card.addEventListener("click", function () {

            // Close other cards
            cards.forEach(c => {
                if (c !== card) c.classList.remove("active");
            });

            // Toggle current card
            card.classList.toggle("active");
        });
    });

});

const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggle.checked = true;
}

toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});