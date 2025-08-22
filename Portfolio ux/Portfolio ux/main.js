// ===== NAVBAR TOGGLE =====
const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

if (menuBtn && navLinks && menuBtnIcon) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
  });

  // Close navbar when clicking a link
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    }
  });
}

// ===== SCROLL REVEAL SETTINGS =====
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1200,
  easing: "ease-in-out",
  reset: false, // set true if you want animations on every scroll
};

// ===== HEADER =====
ScrollReveal().reveal(".header__content h1", scrollRevealOptions);
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOptions,
  delay: 300,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOptions,
  delay: 600,
});

// ===== ABOUT =====
ScrollReveal().reveal(".about__content .section__header", scrollRevealOptions);
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOptions,
  delay: 300,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOptions,
  delay: 600,
});

// ===== SERVICES =====
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 200,
});

// ===== PORTFOLIO =====
ScrollReveal().reveal(".portfolio__filters .btn", {
  ...scrollRevealOptions,
  interval: 150,
});
ScrollReveal().reveal(".portfolio__card", {
  ...scrollRevealOptions,
  interval: 200,
});

// ===== PORTFOLIO FILTER FUNCTION =====
const filterButtons = document.querySelectorAll(".portfolio__filters .btn");
const portfolioCards = document.querySelectorAll(".portfolio__card");

if (filterButtons.length && portfolioCards.length) {
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Active button state
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      portfolioCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        card.style.display = "none";

        if (filter === "all" || category === filter) {
          setTimeout(() => {
            card.style.display = "block";
            card.style.animation = "fadeIn 0.5s ease-in-out";
          }, 100);
        }
      });
    });
  });
}

// ===== FADE-IN KEYFRAMES =====
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(style);
