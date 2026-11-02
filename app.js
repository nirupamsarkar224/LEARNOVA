
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

function selectCourse(course) {
  alert(course + " course selected!\nLearnova courses coming soon.");
}

function showMessage() {
  alert("Welcome to Learnova!\nStudent registration coming soon.");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(() => console.log("Learnova is ready"))
      .catch(error => console.log("Service Worker Error:", error));
  });
}
