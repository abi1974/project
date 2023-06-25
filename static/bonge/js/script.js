var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var next3 = document.getElementById("next3");
var side7 = document.getElementById("side-right7");
var next4 = document.getElementById("next4");
var next5 = document.getElementById("next5");
var next6 = document.getElementById("next6");
var back1 = document.getElementById("back1");
var side1 = document.getElementById("side-right");
var side2 = document.getElementById("side-right2");
var side8 = document.getElementById("side-right8");
var back2 = document.getElementById("back2");
var back4 = document.getElementById("back4");

var back5 = document.getElementById("back5");
var back6 = document.getElementById("back6");
var back7 = document.getElementById("back7");
var side3 = document.getElementById("side-right3");
var side4 = document.getElementById("side-right4");
var back3 = document.getElementById("back3");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var side5 = document.getElementById("side-right5");
var side6 = document.getElementById("side-right6");
var side8 = document.getElementById("side-right8");
var one = document.getElementById("one");
var two = document.getElementById("two");
var active1 = document.getElementById("active1");
var active2 = document.getElementById("active2");
var side10 = document.getElementById("side-right10");
var side11 = document.getElementById("side-right11");
var next6 = document.getElementById("next6");
const bullets = [...document.querySelectorAll(".active")];
var selector = document.getElementById("selector");
let checkbox1 = document.querySelector("#terms");
let checkbox2 = document.querySelector("#privacy");
const Max_Step = 5;
let currrentstep = 1;
var real = document.querySelectorAll("span");

next1.onclick = function () {
  side1.style.display = "none";
  side2.style.display = "block";
};
back1.onclick = function () {
  side2.style.display = "none";
  side1.style.display = "block";
};
back2.onclick = function () {
  side3.style.display = "none";
  side2.style.display = "block";
  bullets[currrentstep - 1].classList.remove("completed");
  currrentstep--;
};
next2.onclick = function () {
  if (checkbox1.checked && checkbox2.checked) {
    side2.style.display = "none";
    side3.style.display = "block";
    console.log("checked");
    bullets[currrentstep].classList.add("completed");
    currrentstep++;
  } else {
    console.log("unchecked");
    alert("Please read the Privacy policy and agree to Terms & Conditions");
  }
};

back3.onclick = function () {
  side4.style.display = "none";
  side3.style.display = "block";
};
box1.onclick = function () {
  side3.style.display = "none";
  side4.style.display = "block";
  localStorage.setItem("value", "true");
};

const radio1 = document.getElementById("radio3");
radio1.onclick = function () {
  console.log("clicked");
  localStorage.setItem("gender", "Male");
};
const radio2 = document.getElementById("radio4");
radio2.onclick = function () {
  console.log("clicked");
  localStorage.setItem("gender", "Female");
};
box2.onclick = function () {
  side3.style.display = "none";
  side4.style.display = "block";
  one.style.display = "none";
  two.style.display = "block";
  localStorage.setItem("value", "false");
};

card1.onclick = function () {
  let currentValue = localStorage.getItem("value");
  if (currentValue === "true") {
    side5.style.display = "block";
  } else {
    side7.style.display = "block";
  }
};

card2.onclick = function () {
  let currentValue = localStorage.getItem("value");
  if (currentValue === "true") {
    side5.style.display = "block";
  } else {
    side7.style.display = "block";
  }
};
back4.onclick = function () {
  side5.style.display = "none";
  side4.style.display = "block";
};
next3.onclick = function () {
  if (rangeValue.innerHTML > 17) {
    side8.style.display = "block";
    side5.style.display = "none";
    side4.style.display = "none";
    bullets[currrentstep].classList.add("completed");
    currrentstep++;
  } else {
    console.log("Error!!");
    alert("Please choose age above 17.");
  }
};
back7.onclick = function () {
  let Value = localStorage.getItem("value");
  if (Value === "false") {
    side8.style.display = "none";
    side7.style.display = "block";
    bullets[currrentstep - 1].classList.remove("completed");
    currrentstep--;
  } else {
    side8.style.display = "none";
    side5.style.display = "block";
    bullets[currrentstep - 1].classList.remove("completed");
    currrentstep--;
  }
};
next4.onclick = function () {
  let symptomInput = document.querySelector(".input-container");
  let ItemContainer = document.querySelector(".item-container");
  if (!symptomInput.contains(ItemContainer)) {
    console.log("null Appeared");
    alert("Please select a symptom to continue.");
  } else {
    side11.style.display = "block";
    side6.style.display = "none";
  }
};
back5.onclick = function () {
  side6.style.display = "none";
  side8.style.display = "block";
};
back6.onclick = function () {
  side7.style.display = "none";
  side4.style.display = "block";
};

next6.onclick = function () {
  side6.style.display = "block";
  side8.style.display = "none";
  side4.style.display = "none";
};

var wrapperNext = document.querySelector(".wrapperNext");
var wrapperBack = document.querySelector(".wrapperBack");
wrapperNext.onclick = function () {
  side10.style.display = "block";
  side11.style.display = "none";
};
wrapperBack.onclick = function () {
  side6.style.display = "block";
  side11.style.display = "none";
};

let dateObject = document.getElementById("Date");
next5.onclick = function () {
  let date = document.getElementById("Date").value;
  let givenDate = new Date(date);
  let today = new Date();
  let age = today.getTime() - givenDate.getTime();
  age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
  if (!dateObject.value) {
    alert("Invalid date selected.");
  } else if (age < 18) {
    alert("Age cannot be less than 18.");
  } else {
    side7.style.display = "none";
    side8.style.display = "block";
    bullets[currrentstep].classList.add("completed");
    currrentstep++;
  }
};

let pickDay = document.getElementById("pickDay");
let pickMonth = document.getElementById("pickMonth");
let pickYear = document.getElementById("year");

dateObject.onchange = function () {
  let date = document.getElementById("Date").value;
  let givenDate = new Date(date);
  let today = new Date();
  let age = today.getTime() - givenDate.getTime();
  age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
  const html2 = `<div>&#9989 Age:${age}</div>`;
  document.querySelector(".newHtmlContainer").innerHTML = html2;
  document.querySelector(".newHtmlContainer").style.display = "block";
  pickDay.value = givenDate.getDate();
  pickMonth.value = givenDate.getMonth() + 1;
  pickYear.value = givenDate.getFullYear();
  console.log(html2);
};

var nextBtn = document.querySelector(".nextBtn");

var backBtn = document.querySelector(".backBtn");
backBtn.onclick = function () {
  side11.style.display = "block";
  side10.style.display = "none";
};

/*
let content1 = document.querySelector(".content1");
let search = document.querySelector(".search");
search.onclick = function () {
  if (content1.style.display === "block") {
    content1.style.display = "none";
  } else {
    content1.style.display = "block";
  }
};

const classArray = [
  ".optionBox",
  ".optionBox1",
  ".optionBox2",
  ".optionBox3",
  ".optionBox4",

  ".optionBox5",

  ".optionBox6",

  ".optionBox7",

  ".optionBox8",

  ".optionBox9",

  ".optionBox10",

  ".optionBox11",

  ".optionBox12",

  ".optionBox13",

  ".optionBox14",

  ".optionBox15",
  ".optionBox16",
];
function getValue() {
  document.addEventListener("click", (e) => {
    // Get element class(es)
    let elementClass = e.target.className;
    let ClassName = document.querySelector("." + elementClass);

    // If element has class(es)
    if (elementClass !== "") {
      let num = classArray[0];
      let newClass = document.querySelector(num);
      console.log(newClass);

      let ClassName = document.querySelector("." + elementClass);
      let newValue = ClassName.innerText;

      newClass.innerHTML = `${newValue}`;

      newClass.style.display = "flex";
      content1.style.display = "none";
    }
    // If element has no classes
    else {
      console.log("element without class");
    }
  });
  classArray.splice(0, 1);
}

function removeOption() {
  document.addEventListener("click", (e) => {
    // Get element class(es)
    let elementClass = e.target.className;

    // If element has class(es)
    if (elementClass !== "") {
      console.log(elementClass);
    } else {
      console.log("no class");
    }
  });
}
*/

/*SLIDER RANGE CODE HERE*/

const rangeThumb = document.getElementById("range-thumb"),
  rangeNumber = document.getElementById("range-number"),
  rangeLine = document.getElementById("range-line"),
  rangeInput = document.getElementById("range-input");
const rangeValue = document.querySelector(".range__value-number");
const rangeInputSlider = () => {
  // Insert the value of the input range
  rangeNumber.textContent = rangeInput.value;

  // Calculate the position of the input thumb
  // rangeInput.value = 50, rangeInput.max = 100, (50 / 100 = 0.5)
  // rangeInput.offsetWidth = 248, rangeThumb.offsetWidth = 32, (248 - 32 = 216)
  const thumbPosition = rangeInput.value / rangeInput.max,
    space = rangeInput.offsetWidth - rangeThumb.offsetWidth;

  // We insert the position of the input thumb
  // thumbPosition = 0.5, space = 216 (0.5 * 216 = 108)
  rangeThumb.style.left = thumbPosition * space + "px";

  // We insert the width to the slider with the value of the input value
  // rangeInput.value = 50, ancho = 50%
  rangeLine.style.width = rangeInput.value + "%";

  // We call the range input
  rangeInput.addEventListener("input", rangeInputSlider);
  console.log(rangeValue.innerHTML);
};

rangeInputSlider();
/*SEARCH BOX*/

function MultiSelectTag(e, t = { shadow: !1, rounded: !0 }) {
  var n = null,
    d = null,
    l = null,
    a = null,
    s = null,
    i = null,
    o = null,
    c = null,
    r = null,
    u = null,
    p = null,
    v = null,
    m = new DOMParser();
  function h(e = null) {
    for (var t of ((v.innerHTML = ""), d))
      if (t.selected) !w(t.value) && f(t);
      else {
        const n = document.createElement("li");
        (n.innerHTML = t.label),
          (n.dataset.value = t.value),
          e && t.label.toLowerCase().startsWith(e.toLowerCase())
            ? v.appendChild(n)
            : e || v.appendChild(n);
      }
  }
  function f(e) {
    const t = document.createElement("div");
    t.classList.add("item-container");
    const n = document.createElement("div");
    n.classList.add("item-label"),
      (n.innerHTML = e.label),
      (n.dataset.value = e.value);
    const l = new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-close-svg">\n                <line x1="18" y1="6" x2="6" y2="18"></line>\n                <line x1="6" y1="6" x2="18" y2="18"></line>\n                </svg>',
      "image/svg+xml"
    ).documentElement;
    l.addEventListener("click", (t) => {
      (d.find((t) => t.value == e.value).selected = !1), g(e.value), h(), E();
    }),
      t.appendChild(n),
      t.appendChild(l),
      o.append(t);
  }
  function L() {
    for (var e of v.children)
      e.addEventListener("click", (e) => {
        (d.find((t) => t.value == e.target.dataset.value).selected = !0),
          (r.value = null),
          h(),
          E(),
          r.focus();
      });
  }
  function w(e) {
    for (var t of o.children)
      if (
        !t.classList.contains("input-body") &&
        t.firstChild.dataset.value == e
      )
        return !0;
    return !1;
  }
  function g(e) {
    for (var t of o.children)
      t.classList.contains("input-body") ||
        t.firstChild.dataset.value != e ||
        o.removeChild(t);
  }
  function E() {
    for (var e = 0; e < d.length; e++) n.options[e].selected = d[e].selected;
  }
  (n = document.getElementById(e)),
    (function () {
      (d = [...n.options].map((e) => ({
        value: e.value,
        label: e.label,
        selected: e.selected,
      }))),
        n.classList.add("hidden"),
        (l = document.createElement("div")).classList.add("mult-select-tag"),
        (a = document.createElement("div")).classList.add("wrapper"),
        (i = document.createElement("div")).classList.add("body"),
        t.shadow && i.classList.add("shadow"),
        t.rounded && i.classList.add("rounded"),
        (o = document.createElement("div")).classList.add("input-container"),
        (r = document.createElement("input")).classList.add("input"),
        (r.placeholder = `${t.placeholder || "Search..."}`),
        (c = document.createElement("inputBody")).classList.add("input-body"),
        c.append(r),
        i.append(o),
        (s = document.createElement("div")).classList.add("btn-container"),
        ((u = document.createElement("button")).type = "button"),
        s.append(u);
      const e = m.parseFromString(
        '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n            <polyline points="18 15 12 21 6 15"></polyline></svg>',
        "image/svg+xml"
      ).documentElement;
      u.append(e),
        i.append(s),
        a.append(i),
        (p = document.createElement("div")).classList.add("drawer", "hidden"),
        t.shadow && p.classList.add("shadow"),
        t.rounded && p.classList.add("rounded"),
        p.append(c),
        (v = document.createElement("ul")),
        p.appendChild(v),
        l.appendChild(a),
        l.appendChild(p),
        n.nextSibling
          ? n.parentNode.insertBefore(l, n.nextSibling)
          : n.parentNode.appendChild(l);
    })(),
    h(),
    L(),
    E(),
    u.addEventListener("click", () => {
      p.classList.contains("hidden") &&
        (h(), L(), p.classList.remove("hidden"), r.focus());
    }),
    r.addEventListener("keyup", (e) => {
      h(e.target.value), L();
    }),
    r.addEventListener("keydown", (e) => {
      if ("Backspace" === e.key && !e.target.value && o.childElementCount > 1) {
        const e = i.children[o.childElementCount - 2].firstChild;
        (d.find((t) => t.value == e.dataset.value).selected = !1),
          g(e.dataset.value),
          E();
      }
    }),
    window.addEventListener("click", (e) => {
      l.contains(e.target) || p.classList.add("hidden");
    });
}
new MultiSelectTag("countries");

const sampleData = [
  {
    step: 1,
    valid: false,
    content: "<p>Value:1</p>",
  },
  {
    step: 2,
    valid: false,
    content: "<p>Value:2</p>",
  },
  {
    step: 3,
    valid: false,
    content: "<p>Value:3</p>",
  },
  {
    step: 4,
    valid: false,
    content: "<p>Value:4</p>",
  },
  {
    step: 5,
    valid: false,
    content: "<p>Value:5</p>",
  },
  {
    step: 6,
    valid: false,
    content: "<p>Value:6</p>",
  },
  {
    step: 7,
    valid: false,
    content: "<p>Value:7</p>",
  },
  {
    step: 8,
    valid: false,
    content: "<p>Value:8</p>",
  },
  {
    step: 9,
    valid: false,
    content: "<p>Value:9</p>",
  },
  {
    step: 10,
    valid: false,
    content: "<p>Value:10</p>",
  },
];

let stepsHTML = "";
for (let i = 0; i < sampleData.length; i++) {
  stepsHTML += `<div class="item3">
                    <div id="circle-number-${i}">
                        <div class="circle" id="circle-${i}">
                            <span class="number" id="number-${i}">
                                ${sampleData[i].step}
                            </span>
                        </div>
                        </div>
                        <div class="line11 ${
                          i === sampleData.length - 1 ? "hide" : ""
                        }" id="line11-${i}"></div>
                </div>`;
}
const progressBarEl = document.getElementById("progress-bar3");
progressBarEl.innerHTML = stepsHTML;

const stepContentEl = document.getElementById("step-content");
const confirmEl = document.getElementById("confirm");

let currentStep = 0;
const primaryColor = "#46D5A3";
const invalidColor = "#aff3db";

// Highlight circle
function highlightCircle(color, step) {
  const circleEl = document.getElementById("circle-" + step);
  const numberEl = document.getElementById("number-" + step);

  circleEl.style.border = "5px solid " + color;
}

// Highlight line
function highlightLine(color, step) {
  const lineEl = document.getElementById("line11-" + step);
  lineEl.style.backgroundColor = color;
}

// Highlight the first step by default
highlightCircle(primaryColor, currentStep);
stepContentEl.innerHTML = sampleData[currentStep].content;
const currentEl = document.getElementById("circle-number-" + currentStep);
currentEl.classList.add("highlight_circle");

function nextStep() {
  const val = confirmEl.checked;
  sampleData[currentStep].valid = val;

  if (!sampleData[currentStep].valid) {
    highlightCircle(invalidColor, currentStep);
    highlightLine(invalidColor, currentStep);
  } else {
    highlightCircle(primaryColor, currentStep);
    highlightLine(primaryColor, currentStep);
  }

  // ALL STEPS VISITED
  if (currentStep + 1 === sampleData.length) {
    let isValid = sampleData.filter((step) => !step.valid).length === 0;

    if (isValid) {
      // All fields are valid
      document.getElementById("container3").innerHTML = "<h1>Successful</h1>";
    }

    return;
  }
  const prevHighlightEl = document.getElementById(
    "circle-number-" + currentStep
  );
  prevHighlightEl.classList.remove("highlight_circle");

  currentStep++;

  const currHighlightEl = document.getElementById(
    "circle-number-" + currentStep
  );
  currHighlightEl.classList.add("highlight_circle");

  highlightCircle(primaryColor, currentStep);
  stepContentEl.innerHTML = sampleData[currentStep].content;
  confirmEl.checked = sampleData[currentStep].valid;
}

function prevStep() {
  if (currentStep === 0) {
    return;
  }
  const val = confirmEl.checked;
  sampleData[currentStep].valid = val;

  if (!sampleData[currentStep].valid) {
    highlightCircle(primaryColor, currentStep - 1);
    highlightCircle(invalidColor, currentStep);
  } else {
    highlightCircle(primaryColor, currentStep);
  }

  const prevHighlightEl = document.getElementById(
    "circle-number-" + currentStep
  );
  prevHighlightEl.classList.remove("highlight_circle");

  currentStep--;

  const currHighlightEl = document.getElementById(
    "circle-number-" + currentStep
  );
  currHighlightEl.classList.add("highlight_circle");

  stepContentEl.innerHTML = sampleData[currentStep].content;
  confirmEl.checked = sampleData[currentStep].valid;
}

confirmEl.addEventListener("change", function (e) {
  const val = e.currentTarget.checked;
  if (val) {
    highlightCircle(primaryColor, currentStep);
    highlightLine(primaryColor, currentStep);
  } else {
    highlightCircle(invalidColor, currentStep);
    highlightLine(invalidColor, currentStep);
  }
});
