// Part 1: Variable Declarations and Conditionals
var userName = "Abraham";
let loggedIn = true;
const maxProjects = 3;


if (loggedIn) {
console.log(userName + " is logged in");
} else {
console.log("User not logged in");
}

// Part 2: Custom Functions
function addProject(title) {
const list = document.getElementById("projectList");
const li = document.createElement("li");
li.textContent = title;
list.appendChild(li);
}


function greetUser(name) {
alert("Welcome to my portfolio, " + name + "!");
}

// Part 3: Loop Examples
// For loop
for (let i = 1; i <= maxProjects; i++) {
addProject("Project " + i);
}

// While loop
let count = 0;
while (count < 1) {
console.log("Displayed projects list");
count++;
}

// DOM Interactions
// 1. Change text content dynamically
document.querySelector("#about p").textContent = "Hi, I am Abraham MOng'are, a creative developer.";

// 2. Event listener on form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();
alert("Thank you for reaching out, " + document.getElementById("name").value + "!");
});

// 3. Greet user on page load
window.addEventListener("load", function() {
greetUser(userName);
});