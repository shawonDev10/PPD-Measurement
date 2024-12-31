const toggleBtn = document.getElementById("toggle-theme");
const html = document.documentElement;
const body = document.body;
const header = document.getElementById("header");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("body-dark");
  header.classList.add("header-dark");
  toggleBtn.checked = true;
} else {
  toggleBtn.checked = false;
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("body-dark");
  header.classList.toggle("header-dark");

  const isDark = header.classList.contains("header-dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
