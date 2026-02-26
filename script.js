const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* =========================
   SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================
   3D TILT EFFECT
========================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

/* =========================
   PROJECT SECTION
========================== */

// Circular Rotation
const slider = document.getElementById("projectsSlider");

function slideRight() {
    const first = slider.firstElementChild;
    slider.appendChild(first);
}

function slideLeft() {
    const last = slider.lastElementChild;
    slider.insertBefore(last, slider.firstElementChild);
}

// Flip on click
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", function() {
        this.querySelector(".card-inner").classList.toggle("flip");
    });
});


// ===== Loop Logic =====
slider.addEventListener("scroll", () => {

    if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth - (2 * cardWidth);
    }

    if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
        slider.scrollLeft = cardWidth;
    }

});

//project flip

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", function() {
        this.querySelector(".card-inner").classList.toggle("flip");
    });
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("click", function () {

    const currentInner = this.querySelector(".card-inner");
    const isFlipped = currentInner.classList.contains("flip");

    // Reset all cards first
    document.querySelectorAll(".card-inner").forEach(inner => {
      inner.classList.remove("flip");
    });

    // If the clicked card was NOT flipped before, flip it
    if (!isFlipped) {
      currentInner.classList.add("flip");
    }

  });
});