document.getElementById("year").textContent = new Date().getFullYear();

// hamburger
const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// localStorage
localStorage.setItem("visited", Date.now());