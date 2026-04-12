import { places } from "../data/discover.mjs";

const grid = document.getElementById("discover-grid");
const messageBox = document.getElementById("visit-message");

// FOOTER DATES
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// VISIT MESSAGE (localStorage)
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    messageBox.textContent = "Back so soon! Awesome!";
  } else if (diffDays === 1) {
    messageBox.textContent = "You last visited 1 day ago.";
  } else {
    messageBox.textContent = `You last visited ${diffDays} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);

// BUILD CARDS
places.forEach(place => {
  const card = document.createElement("div");
  card.classList.add("discover-card");

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  grid.appendChild(card);
});