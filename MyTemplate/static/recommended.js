// JAVASCRIPT LOGIC FOR THE OPENINGING AND CLOSING OF THE TEMPLATES

// GETTING ALL THE ELEMENTS FROM THE DOM
let recommendedTemplate1 = document.getElementById("recommendedTemplate1");
let recommendedTemplate2 = document.getElementById("recommendedTemplate2");
let recommendedTemplate3 = document.getElementById("recommendedTemplate3");
let recommendedTemplate4 = document.getElementById("recommendedTemplate4");
let recommendedTemplate5 = document.getElementById("recommendedTemplate5");
let recommendedTemplate6 = document.getElementById("recommendedTemplate6");
let recommendedTemplate7 = document.getElementById("recommendedTemplate7");
let recommendedTemplate8 = document.getElementById("recommendedTemplate8");
let recommendedTemplate9 = document.getElementById("recommendedTemplate9");

// FUNCTIONS TO HIDE AND SHOW THE TEMPLATES 
function showTemplate1() {
    recommendedTemplate1.style.display = "block";
    recommendedTemplate2.style.display = "none";
    recommendedTemplate3.style.display = "none";
}

function showTemplate2() {
    recommendedTemplate1.style.display = "none";
    recommendedTemplate2.style.display = "block";
    recommendedTemplate3.style.display = "none";
}

function showTemplate3() {
    recommendedTemplate1.style.display = "none";
    recommendedTemplate2.style.display = "none";
    recommendedTemplate3.style.display = "block";
}

function hideTemplate() {
    recommendedTemplate1.style.display = "none";
    recommendedTemplate2.style.display = "none";
    recommendedTemplate3.style.display = "none";
}

function showTemplate4() {
    recommendedTemplate4.style.display = "block";
    recommendedTemplate5.style.display = "none";
    recommendedTemplate6.style.display = "none";
}

function showTemplate5() {
    recommendedTemplate4.style.display = "none";
    recommendedTemplate5.style.display = "block";
    recommendedTemplate6.style.display = "none";
}

function showTemplate6() {
    recommendedTemplate4.style.display = "none";
    recommendedTemplate5.style.display = "none";
    recommendedTemplate6.style.display = "block";
}

function hideTemplate2() {
    recommendedTemplate4.style.display = "none";
    recommendedTemplate5.style.display = "none";
    recommendedTemplate6.style.display = "none";
}

function showTemplate7() {
    recommendedTemplate7.style.display = "block";
    recommendedTemplate8.style.display = "none";
    recommendedTemplate9.style.display = "none";
}

function showTemplate8() {
    recommendedTemplate7.style.display = "none";
    recommendedTemplate8.style.display = "block";
    recommendedTemplate9.style.display = "none";
}

function showTemplate9() {
    recommendedTemplate7.style.display = "none";
    recommendedTemplate8.style.display = "none";
    recommendedTemplate9.style.display = "block";
}

function hideTemplate3() {
    recommendedTemplate7.style.display = "none";
    recommendedTemplate8.style.display = "none";
    recommendedTemplate9.style.display = "none";
} 