document.getElementById('header-container').style.backgroundColor = '#00B069';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#FF9F84';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#F9DB5E';
document.querySelectorAll('.emergency-tasks')

let emergencyTasks = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = '#A500F3';
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < emergencyTasks.length; i += 1) {
    noEmergencyTasks[i].style.backgroundColor = 'black';
}

document.querySelector('#footer-container').style.backgroundColor = '#003533';