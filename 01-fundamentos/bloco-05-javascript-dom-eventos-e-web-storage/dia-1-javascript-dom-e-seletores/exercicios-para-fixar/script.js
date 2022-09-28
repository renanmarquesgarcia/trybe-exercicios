const headerContainer = document.getElementById('header-container').style.backgroundColor = 'green';

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "pink";

const noEmergencyTask = document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";

const emergencyTasksH3 = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < emergencyTasksH3.length; index += 1) {
    emergencyTasksH3[index].style.backgroundColor = 'purple';    
}

const noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < noEmergencyTasksH3.length; index += 1) {
    noEmergencyTasksH3[index].style.backgroundColor = 'black';    
}

const footContainer = document.getElementById("footer-container").style.backgroundColor = 'green'


