const canvas = document.getElementById("dynamic-bg");
const ctx = canvas.getContext("2d");

// Set canvas size to full window
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

// Particle settings
const particles = [];
const particleCount = 80;
const mainColor = "#7494ec";

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }

  draw() {
    ctx.fillStyle = mainColor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.reset();
    }
  }
}

// Create particles
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

// Handle window resize
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// Wait until the entire DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  // Create an IntersectionObserver to detect when elements come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 } 
  );

  reveals.forEach((reveal) => observer.observe(reveal));
});

// Another DOMContentLoaded event to handle the header animation
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  header.classList.add("show");
});

const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('header nav');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

