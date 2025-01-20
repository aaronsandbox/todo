document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn-close[data-reload='true']").forEach((button) => {
      button.addEventListener("click", () => {
        location.reload(); // Refresh the page
      });
    });
  });