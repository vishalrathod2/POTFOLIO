// Handle form submission
function handleForm(event) {
  event.preventDefault();
  alert("Thank you for contacting me!");
}

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('toggle_checkbox');
  if (toggle) {
    toggle.addEventListener('change', function () {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Tab Visibility Animation: Title & Favicon
  let originalTitle = document.title;
  let blinkInterval;
  const favicon = document.querySelector("link[rel='icon']");
  const originalFavicon = "img/vishal.ico";       // existing favicon
  const alertFavicon = "img/alert.ico";           // create this alternate icon

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      // Animate title
      blinkInterval = setInterval(() => {
        document.title = document.title === "👋 Come Back!" ? originalTitle : "👋 Come Back!";
      }, 1000);
      // Change favicon
      if (favicon) favicon.href = alertFavicon;
    } else {
      // Restore title and favicon
      clearInterval(blinkInterval);
      document.title = originalTitle;
      if (favicon) favicon.href = originalFavicon;
    }
  });

  // Mobile and Desktop Responsiveness Handling for Forms and Dark Mode
  if (window.innerWidth <= 768) {
    // Adjust dark mode toggle for mobile, if needed
    const toggleLabel = document.querySelector(".toggle-label");
    if (toggleLabel) {
      toggleLabel.style.marginLeft = "10px"; // Adjust margin for smaller screens
    }
  }

  // Optional: Adjust elements dynamically based on screen size
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
      // If it's a mobile screen, make adjustments
      document.body.classList.remove('dark-mode'); // For mobile, you could disable dark mode by default
    } else {
      // Desktop screen handling (optional)
    }
  });
});
