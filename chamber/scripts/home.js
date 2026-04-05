
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

/* ---------------- WEATHER ---------------- */
async function getWeather() {
  const tempEl = document.getElementById("temp");
  const descEl = document.getElementById("desc");
  const forecastEl = document.getElementById("forecast");

  try {
    const apiKey = "YOUR_API_KEY_HERE";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=Lagos&units=metric&appid=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    tempEl.textContent = `Temp: ${data.list[0].main.temp}°C`;
    descEl.textContent = data.list[0].weather[0].description;

    forecastEl.innerHTML = `
      <p>Day 1: ${data.list[8].main.temp}°C</p>
      <p>Day 2: ${data.list[16].main.temp}°C</p>
      <p>Day 3: ${data.list[24].main.temp}°C</p>
    `;
  } catch (error) {
    tempEl.textContent = "28°C";
    descEl.textContent = "Partly cloudy";

    forecastEl.innerHTML = `
      <p>Day 1: 29°C</p>
      <p>Day 2: 30°C</p>
      <p>Day 3: 28°C</p>
    `;
  }
}

getWeather();

/* ---------------- SPOTLIGHTS ---------------- */
async function loadSpotlights() {
  const res = await fetch("data/members.json");
  const members = await res.json();

  let filtered = members.filter(m => m.membership === 2 || m.membership === 3);

  filtered.sort(() => Math.random() - 0.5);

  let selected = filtered.slice(0, 3);

  const container = document.getElementById("spotlights");
  container.innerHTML = "";

  selected.forEach(m => {
    container.innerHTML += `
      <div class="card">
        <h3>${m.name}</h3>
        <p>${m.address}</p>
        <p>${m.phone}</p>
        <a href="${m.website}" target="_blank">Visit Website</a>
        <p>Membership: ${m.membership === 3 ? "Gold" : "Silver"}</p>
      </div>
    `;
  });
}

loadSpotlights();