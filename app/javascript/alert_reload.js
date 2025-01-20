// app/javascript/alert_reload.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("alert_reload.js loaded");
  
    document.querySelectorAll(".btn-close[data-reload='true']").forEach((button) => {
      console.log("Close button found", button);
  
      button.addEventListener("click", () => {
        console.log("Close button clicked");
        setTimeout(() => {
          console.log("Reloading the page");
          location.reload(); // Refresh the page
        }, 200); // Delay allows for smooth dismiss
      });
    });
  });
  