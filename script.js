// ==========================================
// MENÚ HAMBURGUESA
// ==========================================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Cerrar menú al hacer click en un link (mobile)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ==========================================
// AÑO DINÁMICO EN EL FOOTER
// ==========================================
const footerYear = document.getElementById("footer-year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// ==========================================
// ANIMACIONES AL HACER SCROLL (Intersection Observer)
// ==========================================
const animatedElements = document.querySelectorAll(".card, .project-card, .section-header");

animatedElements.forEach(el => {
  el.classList.add("fade-in");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

animatedElements.forEach(el => observer.observe(el));

// ==========================================
// NAVBAR: sombra al hacer scroll
// ==========================================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.style.background = "rgba(8, 11, 18, 0.97)";
  } else {
    navbar.style.background = "rgba(8, 11, 18, 0.85)";
  }
});
