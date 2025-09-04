const container = document.querySelector(".container");
const registerBtns = document.querySelectorAll(".register-btn");
const loginBtns = document.querySelectorAll(".login-btn");
const forgetBtns = document.querySelectorAll(".forget-btn");

// Show Register form
registerBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("active"); // Show register
    container.classList.remove("forget-active"); // Hide forget
  });
});

// Show Login form
loginBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("active"); // Hide register
    container.classList.remove("forget-active"); // Hide forget
  });
});

// Show Forgot Password form
forgetBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("forget-active"); // Show forget
    container.classList.remove("active"); // Hide register
  });
});
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

// run when DOM ready
document.addEventListener("DOMContentLoaded", function () {
  // show header (if exists)
  const header = document.querySelector("header");
  if (header) header.classList.add("show");

  // show container (if exists) — NOTE: selector must be ".container"
  const container = document.querySelector(".container");
  if (container) container.classList.add("show");
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('header nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});

