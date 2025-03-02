document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletter-form");
  const verificationForm = document.getElementById("verification-form");
  // const unsubscribeForm = document.getElementById("unsubscribe-form");

  const newsletterMessage = document.getElementById("newsletter-message");
  const verificationMessage = document.getElementById("verification-message");
  // const unsubscribeMessage = document.getElementById("unsubscribe-message");

  const verificationSection = document.querySelector(".verification");

  // Subscribe Form Submit
  newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(newsletterForm);

      fetch("/subscribe", {
          method: "POST",
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          newsletterMessage.textContent = data.message;
          newsletterMessage.style.color = "blue";
          if (data.message.includes("Verification email sent")) {
              verificationSection.style.display = "block";
          }
      })
      .catch(error => {
          newsletterMessage.textContent = "Something went wrong!";
          newsletterMessage.style.color = "red";
      });
  });

  // Verify Email Form Submit
  verificationForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(verificationForm);

      fetch("/verify", {
          method: "POST",
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          verificationMessage.textContent = data.message;
          verificationMessage.style.color = data.message.includes("success") ? "green" : "red";
      })
      .catch(error => {
          verificationMessage.textContent = "Something went wrong!";
          verificationMessage.style.color = "red";
      });
  });

//   // Unsubscribe Form Submit
//   unsubscribeForm.addEventListener("submit", function (event) {
//       event.preventDefault();

//       const formData = new FormData(unsubscribeForm);

//       fetch("/unsubscribe", {
//           method: "POST",
//           body: formData
//       })
//       .then(response => response.json())
//       .then(data => {
//           unsubscribeMessage.textContent = data.message;
//           unsubscribeMessage.style.color = data.message.includes("successfully") ? "green" : "red";
//       })
//       .catch(error => {
//           unsubscribeMessage.textContent = "Something went wrong!";
//           unsubscribeMessage.style.color = "red";
//       });
//   });
 });
