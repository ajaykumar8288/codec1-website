document.addEventListener("DOMContentLoaded", () => {
  const progressCheckboxes = document.querySelectorAll(
    ".progress-tracker input"
  );

  // Load saved progress from localStorage
  progressCheckboxes.forEach((checkbox, index) => {
    const isChecked = localStorage.getItem(`tutorial_${index}`);
    if (isChecked === "true") {
      checkbox.checked = true;
    }

    // Save progress on change
    checkbox.addEventListener("change", () => {
      localStorage.setItem(`tutorial_${index}`, checkbox.checked);
    });
  });

  // Share button functionality
  const shareButtons = document.querySelectorAll(".share-btn");
  shareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tutorialTitle = button
        .closest(".card")
        .querySelector("h3").innerText;
      const shareUrl = window.location.href;

      if (navigator.share) {
        navigator
          .share({
            title: tutorialTitle,
            url: shareUrl,
          })
          .catch((err) => console.log("Error sharing:", err));
      } else {
        alert("Sharing not supported in this browser. Copy the URL manually!");
      }
    });
  });
});
