document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded successfully!"); // Debugging log

  // Dark Mode
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const body = document.body;

  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleBtn.innerHTML = "☀️";
  }

  toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
    toggleBtn.innerHTML = isDarkMode ? "☀️" : "🌙";
  });

  // Search Functionality
  window.searchBlogs = function () {
    const query = document.getElementById("search-input").value.toLowerCase();
    document.querySelectorAll(".blog-card").forEach((blog) => {
      const title = blog.querySelector("h3").textContent.toLowerCase();
      blog.style.display = title.includes(query) ? "block" : "none";
    });
  };
});