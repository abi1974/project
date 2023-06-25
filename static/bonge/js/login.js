let usernamePlaceholder = document.getElementById("userPlaceholder");
let passwordPlaceholder = document.getElementById("passPlaceholder");
console.log("hello");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit");

console.log(username.value);

username.addEventListener("keyup", (e) => {
  const value1 = e.currentTarget.value;
  sessionStorage.setItem("userinput", value1);

  if (value1 === "") {
    console.log("Empty");
  } else {
    console.log("not empty");
  }
  changeColor();
});
password.addEventListener("keyup", (e) => {
  const value2 = e.currentTarget.value;
  sessionStorage.setItem("passinput", value2);

  if (value2 === "") {
    console.log("Empty");
  } else {
    console.log("not empty");
  }
  changeColor();
});
function changeColor() {
  let b = sessionStorage.getItem("userinput");
  let a = sessionStorage.getItem("passinput");

  if (a === "" && b === "") {
    console.log("Full empty");
    submitBtn.style.backgroundColor = "white";
    submitBtn.disabled = true;
  } else if (a === "" || b === "") {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "white";
  } else if (a === null || b === null) {
    submitBtn.style.backgroundColor = "white";
    submitBtn.disabled = true;
  } else if (a !== "" && b !== "") {
    console.log("Full not empty");
    submitBtn.style.backgroundColor = "red";
    submitBtn.disabled = false;
    submitBtn.style.transition = "0.3s ease";
  }
}
setInterval(changeColor, 2000);
window.onload = function () {
  sessionStorage.clear();
};
