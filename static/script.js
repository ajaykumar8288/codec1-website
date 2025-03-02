

// Page Loader
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  // Remove loader after transition
  loader.addEventListener("transitionend", function () {
    loader.remove();
  });
});

// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-reveal");

  const scrollObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  scrollElements.forEach((el) => scrollObserver.observe(el));
});

// Sticky Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Back-to-Top Button Functionality
const backToTopButton = document.createElement("button");
backToTopButton.id = "backToTop";
backToTopButton.innerText = "⬆";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
