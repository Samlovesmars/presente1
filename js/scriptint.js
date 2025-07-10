function checkName() {
    const input = document.getElementById("nameInput").value.trim();
    const result = document.getElementById("result");
    const loading = document.getElementById("loading");

    if (input.toLowerCase() === "marshall") {
      result.textContent = "MI CHIQUIBEIBIIIII";
      result.style.color = "green";

      // Wait 4 seconds showing the result before showing loading screen
      setTimeout(() => {
        loading.classList.remove("hidden"); // Show loading screen

        // After 2 more seconds, go to main
        setTimeout(() => {
          window.location.href = "letter.html";
        }, 3000);
      }, 2500);
    } else {
      result.textContent = "Você não >:(";
      result.style.color = "red";
    }
  }

  // Dot animation loop for "Loading gift..."
let dotCount = 0;
setInterval(() => {
  const dots = document.getElementById('dots');
  if (dots) {
    dotCount = (dotCount + 1) % 4;
    dots.textContent = '.'.repeat(dotCount);
  }
}, 600);
