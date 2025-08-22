document.addEventListener('DOMContentLoaded', () => {
  /* === AOS (dikey açılış) === */
  if (window.AOS) {
    AOS.init({ duration: 900, easing: "ease-out", once: true, offset: 120 });
  }

  /* === Typed.js === */
  const typedTarget = document.getElementById("typed-output");
  if (typedTarget && window.Typed) {
    new Typed("#typed-output", {
      strings: ["Data Scientist", "Backend Developer", "Machine Learning Engineer", "AI Agent Builder"],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    });
  }

  /* === Light mode === */
  const toggleBtn = document.getElementById("darkModeToggle");
  const modeIcon = document.getElementById("mode-icon");

  if (toggleBtn && modeIcon) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");

      if (document.body.classList.contains("light-theme")) {
        modeIcon.textContent = "☀️"; // Light Mode
      } else {
        modeIcon.textContent = "🌙"; // Dark Mode
      }
    });
  }

  /* === Accordion === */
  document.querySelectorAll(".accordion-header").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      document.querySelectorAll(".accordion-item").forEach(el => {
        if (el !== item) {
          el.classList.remove("open");
          el.querySelector(".accordion-header")?.setAttribute("aria-expanded", "false");
        }
      });
      const isOpen = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  /* === Services Mega Menu === */
  const servicesTrigger = document.getElementById("servicesTrigger");
  const servicesMenu = document.getElementById("servicesMenu");
  if (servicesTrigger && servicesMenu) {
    servicesTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = !servicesMenu.hasAttribute("hidden");
      if (isOpen) {
        servicesMenu.setAttribute("hidden", "");
        servicesTrigger.setAttribute("aria-expanded", "false");
      } else {
        servicesMenu.removeAttribute("hidden");
        servicesTrigger.setAttribute("aria-expanded", "true");
      }
    });
    document.addEventListener("click", (e) => {
      if (!servicesTrigger.contains(e.target) && !servicesMenu.contains(e.target)) {
        servicesMenu.setAttribute("hidden", "");
        servicesTrigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* === Hamburger Menü === */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      const expanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
      const next = !expanded;
      hamburgerBtn.setAttribute("aria-expanded", String(next));
      mobileMenu.hidden = !next;                     
      mobileMenu.classList.toggle("open", next);     
    });
    document.querySelectorAll(".moblink").forEach(link => {
      link.addEventListener("click", () => {
        hamburgerBtn.setAttribute("aria-expanded", "false");
        mobileMenu.hidden = true;
        mobileMenu.classList.remove("open");
      });
    });
  }

  /* === Scroll Progress === */
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + "%";
    });
  }
});
