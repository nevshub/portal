// Grove Role Selection Logic
const ADMIN_PASSWORD = "GroveFire";

document.getElementById("adminBtn").addEventListener("click", () => {
  const pass = prompt("Enter Admin Password:");
  if(pass === ADMIN_PASSWORD) {
    localStorage.setItem("userRole", "admin");
    window.location.href = "home.html";
  } else {
    alert("Incorrect password.");
  }
});

document.getElementById("memberBtn").addEventListener("click", () => {
  localStorage.setItem("userRole", "member");
  window.location.href = "home.html";
});

document.getElementById("guestBtn").addEventListener("click", () => {
  localStorage.setItem("userRole", "guest");
  window.location.href = "home.html";
});
