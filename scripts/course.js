const courses = [
  { code: "WDD130", credits: 3, completed: true },
  { code: "WDD131", credits: 3, completed: false },
  { code: "WDD231", credits: 3, completed: false },
  { code: "CSE111", credits: 4, completed: true }
];

const container = document.getElementById("course-container");
const creditDisplay = document.getElementById("credits");

function displayCourses(list) {
  container.innerHTML = "";

  list.forEach(course => {
    const div = document.createElement("div");
    div.textContent = course.code;

    div.classList.add("course");

    if (course.completed) {
      div.classList.add("done");
    }

    container.appendChild(div);
  });

  const total = list.reduce((sum, c) => sum + c.credits, 0);
  creditDisplay.textContent = total;
}

displayCourses(courses);

// FILTER BUTTONS
document.getElementById("all").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("wdd").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.code.includes("WDD")));
});

document.getElementById("cse").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.code.includes("CSE")));
});