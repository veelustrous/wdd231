// Footer year + last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Timestamp for form
const timestampField = document.getElementById("timestamp");
if (timestampField) {
  timestampField.value = new Date().toISOString();
}

// MODALS
const buttons = document.querySelectorAll("button[data-modal]");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = document.getElementById(btn.dataset.modal);
    if (modal) modal.showModal();
  });
});

// Close modal buttons
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest("dialog").close();
  });
});

// THANK YOU PAGE DATA DISPLAY
const params = new URLSearchParams(window.location.search);

const fields = {
  fname: "fname",
  lname: "lname",
  email: "email",
  phone: "phone",
  org: "organization",
  time: "timestamp"
};

Object.keys(fields).forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = params.get(fields[id]) || "N/A";
  }
});