const grid = document.querySelector(".creatives-grid");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");

async function loadCreatives() {
  try {
    const res = await fetch("data/creatives.json");
    const data = await res.json();

    renderCreatives(data);

  } catch (error) {
    console.error("Error loading creatives:", error);
    grid.innerHTML = "<p>Failed to load creatives.</p>";
  }
}

function renderCreatives(creatives) {
  creatives.forEach((person) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${person.image}" alt="${person.name}" loading="lazy">
      <h3>${person.name}</h3>
      <p>${person.role}</p>
      <button class="view-btn">View Details</button>
    `;

    card.querySelector(".view-btn").addEventListener("click", () => {
      openModal(person);
    });

    grid.appendChild(card);
  });
}

function openModal(person) {
  modalContent.innerHTML = `
    <h2>${person.name}</h2>
    <p><strong>Role:</strong> ${person.role}</p>
    <p><strong>Location:</strong> ${person.location}</p>
    <p><strong>Experience:</strong> ${person.experience}</p>
    <p>${person.bio}</p>
  `;

  modal.showModal();
}

document.querySelector("#closeModal").addEventListener("click", () => {
  modal.close();
});

loadCreatives();