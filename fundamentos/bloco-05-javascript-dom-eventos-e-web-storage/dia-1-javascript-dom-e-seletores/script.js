const titulo = document.getElementById("header-container");
titulo.style.backgroundColor = "#00B069";

const nonEmergencyTasks = document.querySelectorAll(
  ".no-emergency-tasks div h3"
);

for (let i = 0; i < nonEmergencyTasks.length; i += 1) {
  nonEmergencyTasks[i].style.backgroundColor = "black";
}

const emergencyTasks = document.querySelectorAll(".emergency-tasks div h3");

for (let i = 0; i < emergencyTasks.length; i += 1) {
  emergencyTasks[i].style.backgroundColor = "#A531F3";
}

const container = document.getElementById("container");
container.style.backgroundColor = "#F3F3F3";

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#003533";

const emergencyTasksClass = document.querySelector(".emergency-tasks");
emergencyTasksClass.style.backgroundColor = "#FF9F84";

const nonEmergencyTasksClass = document.querySelector(".no-emergency-tasks");
nonEmergencyTasksClass.style.backgroundColor = "#F8DB5E";
