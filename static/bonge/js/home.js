const Symptom1 = document.getElementById("Symptom1");
const Symptom2 = document.getElementById("Symptom2");
const Symptom3 = document.getElementById("Symptom3");
const Symptom4 = document.getElementById("Symptom4");
const Symptom5 = document.getElementById("Symptom5");
const submitBtn = document.getElementById("btn");
const symp1 = document.getElementById("symp1");
const symp2 = document.getElementById("symp2");
const symp3 = document.getElementById("symp3");
const symp4 = document.getElementById("symp4");
const symp5 = document.getElementById("symp5");

Symptom1.addEventListener("keyup", (e) => {
  const value1 = e.currentTarget.value;
  sessionStorage.setItem("userinput1", value1);

  changeColor();
});

Symptom2.addEventListener("keyup", (e) => {
  const value2 = e.currentTarget.value;
  sessionStorage.setItem("userinput2", value2);

  changeColor();
});

Symptom3.addEventListener("keyup", (e) => {
  const value3 = e.currentTarget.value;
  sessionStorage.setItem("userinput3", value3);

  changeColor();
});

Symptom4.addEventListener("keyup", (e) => {
  const value4 = e.currentTarget.value;
  sessionStorage.setItem("userinput4", value4);

  changeColor();
});

Symptom5.addEventListener("keyup", (e) => {
  const value5 = e.currentTarget.value;
  sessionStorage.setItem("userinput5", value5);

  changeColor();
});

function changeColor() {
  let a = sessionStorage.getItem("userinput1");
  let b = sessionStorage.getItem("userinput2");
  let c = sessionStorage.getItem("userinput3");
  let d = sessionStorage.getItem("userinput4");
  let e = sessionStorage.getItem("userinput5");

  if (a === "" && b === "" && c === "" && d === "" && e === "") {
    console.log("Full empty");
    submitBtn.style.backgroundColor = "white";
    submitBtn.disabled = true;
  } else if (a === "" || b === "" || c === "" || d === "" || e === "") {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "white";
  } else if (
    a === null ||
    b === null ||
    c === null ||
    d === null ||
    e === null
  ) {
    submitBtn.style.backgroundColor = "white";
    submitBtn.disabled = true;
  } else if (a !== "" && b !== "" && c !== "" && d !== "" && e !== "") {
    console.log("Full not empty");
    submitBtn.style.backgroundColor = "#00D26A";
    submitBtn.style.outline = "#6DDEB6";
    submitBtn.disabled = false;
    submitBtn.style.transition = "0.3s ease";
  }
}

setInterval(changeColor, 2000);
window.onload = function () {
  sessionStorage.clear();
};

var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];

// Get the background element
var background = document.getElementById("background");
const content = document.querySelector(".content");
// Get the pulse monitor element
var pulseMonitor = document.createElement("div");
pulseMonitor.classList.add("pulse-monitor");
document.body.appendChild(pulseMonitor);
const main = document.querySelector(".main");
submitBtn.onclick = function () {
  console.log("hello user");
  pulseMonitor.style.opacity = "1";
  content.style.zIndex = "100";
  content.style.opacity = "1";

  main.style.display = "none";

  setTimeout(function () {
    window.location.href = "result.html";
  }, 8000);
};
window.onload = function () {
  var element = document.getElementById("myform");
  element.reset();
};
