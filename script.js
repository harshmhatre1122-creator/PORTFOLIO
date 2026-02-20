// AOS Init
AOS.init({
    duration: 1000,
    once: true
});

// Typing Effect
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

document.addEventListener("DOMContentLoaded", typeEffect);

// Particles Config
particlesJS("particles-js", {
    particles: {
        number: { value: 70 },
        size: { value: 3 },
        color: { value: "#00f2ff" },
        line_linked: { enable: true, color: "#8a2be2" }
    }
});


