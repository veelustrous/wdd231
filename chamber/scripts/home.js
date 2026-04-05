// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

/* ---------------- WEATHER (SAFE FALLBACK VERSION) ---------------- */
// This avoids breaking if API is not ready

async function getWeather() {
  try {
    const apiKey = "YOUR_API_KEY_HERE"; // optional
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("temp").textContent =
      `Temp: ${data.main.temp}°C`;

    document.getElementById("desc").textContent =
      data.weather[0].description;

  } catch (error) {
    document.getElementById("temp").textContent = "Weather unavailable";
  }
}

getWeather();

/* ---------------- SPOTLIGHTS ---------------- */

async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const members = await response.json();

  // filter gold (3) and silver (2)
  let eligible = members.filter(m => m.membership >= 2);

  // shuffle
  eligible.sort(() => 0.5 - Math.random());

  // pick 2–3
  let selected = eligible.slice(0, 3);

  const container = document.getElementById("spotlights");

  selected.forEach(m => {
    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${m.name}</h3>
      <p>${m.address}</p>
      <p>${m.phone}</p>
      <a href="${m.website}" target="_blank">Visit</a>
      <p>Membership: ${m.membership}</p>
    `;

    container.appendChild(card);
  });
}

loadSpotlights();