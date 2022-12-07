const header = document.getElementById("header-container");
header.style.backgroundColor = "#00B069";

const emergencyTasksHeader =
  document.getElementsByClassName("emergency-tasks")[0];
emergencyTasksHeader.style.backgroundColor = "#FF9F84";

const noEmergencyTasksHeader =
  document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasksHeader.style.backgroundColor = "#F9DB5E";

let emergencyTasks = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergencyTasks.length; i += 1) {
  emergencyTasks[i].style.backgroundColor = "#A500F3";
}

let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < emergencyTasks.length; i += 1) {
  noEmergencyTasks[i].style.backgroundColor = "black";
}

const footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "#003533";
