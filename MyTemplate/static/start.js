// GETTING ALL THE ELEMENTS FROM THE DOM
let startTemplate1 = document.getElementById("startTemplate1");
let startTemplate2 = document.getElementById("startTemplate2");
let startTemplate3 = document.getElementById("startTemplate3");
let startTemplate4 = document.getElementById("startTemplate4");
let startTemplate5 = document.getElementById("startTemplate5");
let startTemplate6 = document.getElementById("startTemplate6");
let startTemplate7 = document.getElementById("startTemplate7");
let startTemplate8 = document.getElementById("startTemplate8");
let startTemplate9 = document.getElementById("startTemplate9");

// ALL THE FUNCTIONS
function showTemplate1() {
  startTemplate1.style.display = "block";
  startTemplate2.style.display = "none";
  startTemplate3.style.display = "none";
}

function showTemplate2() {
  startTemplate1.style.display = "none";
  startTemplate2.style.display = "block";
  startTemplate3.style.display = "none";
}

function showTemplate3() {
  startTemplate1.style.display = "none";
  startTemplate2.style.display = "none";
  startTemplate3.style.display = "block";
}

function hideTemplate() {
  startTemplate1.style.display = "none";
  startTemplate2.style.display = "none";
  startTemplate3.style.display = "none";
}

function showTemplate4() {
  startTemplate4.style.display = "block";
  startTemplate5.style.display = "none";
  startTemplate6.style.display = "none";
}

function showTemplate5() {
  startTemplate4.style.display = "none";
  startTemplate5.style.display = "block";
  startTemplate6.style.display = "none";
}

function showTemplate6() {
  startTemplate4.style.display = "none";
  startTemplate5.style.display = "none";
  startTemplate6.style.display = "block";
}

function hideTemplate2() {
  startTemplate4.style.display = "none";
  startTemplate5.style.display = "none";
  startTemplate6.style.display = "none";
}

function showTemplate7() {
  startTemplate7.style.display = "block";
  startTemplate8.style.display = "none";
  startTemplate9.style.display = "none";
}

function showTemplate8() {
  startTemplate7.style.display = "none";
  startTemplate8.style.display = "block";
  startTemplate9.style.display = "none";
}

function showTemplate9() {
  startTemplate7.style.display = "none";
  startTemplate8.style.display = "none";
  startTemplate9.style.display = "block";
}

function hideTemplate3() {
  startTemplate7.style.display = "none";
  startTemplate8.style.display = "none";
  startTemplate9.style.display = "none";  
}
