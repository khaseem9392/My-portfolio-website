// Update footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Close on link click (mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Scroll reveal animation
  const animated = document.querySelectorAll(".animate-up");

  const reveal = () => {
    const triggerBottom = window.innerHeight * 0.9;

    animated.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };

  reveal();
  window.addEventListener("scroll", reveal);

  // Demo contact form (prevent real submit)
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", () => {
      alert("Thanks for your message! This is a demo form – connect it to a backend or email service to make it live.");
    });
  }
});
