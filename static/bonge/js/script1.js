const signUpButton = document.getElementById("signup");
const signInButton = document.getElementById("login");
const main = document.getElementById("main");

signUpButton.addEventListener("click", () => {
  main.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
  main.classList.remove("right-panel-active");
});