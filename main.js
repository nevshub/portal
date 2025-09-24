// === Grove Admin/Guest Logic ===
const ADMIN_PASSWORD = "GroveFire"; // change this to your sacred password

const adminBtn = document.getElementById("adminBtn");
const guestBtn = document.getElementById("guestBtn");

// Admin button prompt
adminBtn.addEventListener("click", () => {
  const pass = prompt("Enter Admin Password:");
  if (pass === ADMIN_PASSWORD) {
    // Save admin session in localStorage
    localStorage.setItem("userRole", "admin");
    window.location.href = "home.html"; // Admin homepage
  } else {
    alert("Incorrect password.");
  }
});

// Guest button
guestBtn.addEventListener("click", () => {
  localStorage.setItem("userRole", "guest");
  window.location.href = "home.html"; // Guest homepage
});
