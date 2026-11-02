
let isRegister = false;

function switchMode() {
  isRegister = !isRegister;

  document.getElementById("formTitle").textContent =
    isRegister ? "Create Account" : "Welcome Back";

  document.getElementById("formSubtitle").textContent =
    isRegister
      ? "Join Learnova and start learning."
      : "Login to continue your learning journey.";

  document.getElementById("nameField").classList.toggle("hidden", !isRegister);

  document.getElementById("name").required = isRegister;

  document.querySelector(".auth-submit").textContent =
    isRegister ? "Register" : "Login";

  document.getElementById("switchLabel").textContent =
    isRegister ? "Already registered?" : "New student?";

  document.getElementById("switchButton").textContent =
    isRegister ? "Login" : "Create Account";

  document.getElementById("authMessage").textContent = "";
}

document.getElementById("authForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isRegister) {
    document.getElementById("authMessage").textContent =
      "Registration UI ready. Connect secure backend to create account.";
  } else {
    document.getElementById("authMessage").textContent =
      "Login UI ready. Connect secure backend to authenticate.";
  }
});
