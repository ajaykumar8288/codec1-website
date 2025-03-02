document.addEventListener("DOMContentLoaded", function () {
  console.log("Footer loaded successfully!");
  
  // Example: Add smooth scrolling to footer links
  document.querySelectorAll(".footer a").forEach(link => {
      link.addEventListener("click", function (e) {
          if (this.getAttribute("href").startsWith("#")) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute("href"));
              if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
              }
          }
      });
  });
});
