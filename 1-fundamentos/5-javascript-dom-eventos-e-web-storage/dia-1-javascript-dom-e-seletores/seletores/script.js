document.getElementById('header-container').style.backgroundColor = 'green';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'orange';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'khaki';
document.querySelectorAll('.emergency-tasks')

let emergencyTasks = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = 'purple';
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < emergencyTasks.length; i += 1) {
    noEmergencyTasks[i].style.backgroundColor = 'black';
}

document.querySelector('#footer-container').style.backgroundColor = '#008000';