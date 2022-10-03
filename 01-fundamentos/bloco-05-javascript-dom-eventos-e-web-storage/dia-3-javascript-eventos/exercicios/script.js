function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  // 1

function createDaysOfMonth() {  

    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];  
    const days = document.querySelector('#days');
  
    for (let index = 0; index < decemberDaysList.length; index += 1) {
      const monthDay = decemberDaysList[index]
      const monthDayListItem = document.createElement('li');
      monthDayListItem.innerHTML = monthDay;
      monthDayListItem.classList.add('day');
      
      if(decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31){
      monthDayListItem.classList.add('holiday');
      } 
      if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11|| decemberDaysList[index] === 18 || decemberDaysList[index] === 25) {
        monthDayListItem.classList.add('friday');
      }
    
      days.appendChild(monthDayListItem);
    }
}

createDaysOfMonth()

    // 2 e 4

function createButton (buttonName, buttonId) {
    const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
    const holidayButton = document.createElement('button');
    holidayButton.id = buttonId
    holidayButton.innerHTML = buttonName;

    buttonsContainer.appendChild(holidayButton);
}

createButton("Feriados", "btn-holiday");
createButton("Sexta-feira", "btn-friday");

    // 3 

function displayHolidays(){
    let holidayButton = document.getElementById('btn-holiday');
    let holidays = document.getElementsByClassName('holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'blue';


    holidayButton.addEventListener("click", function (){
        
        for(let index = 0; index < holidays.length; index += 1){
            if(holidays[index].style.backgroundColor === setNewColor){
                holidays[index].style.backgroundColor = backgroundColor
            } else {
               holidays[index].style.backgroundColor = setNewColor;
            }                   
        }
    });
}

displayHolidays()

    // 5 

function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'Weekend...';
      
    getFridayButton.addEventListener('click', function() {
        for (let index = 0; index < fridays.length; index += 1) {
            if (fridays[index].innerHTML !== newFridayText) {
                fridays[index].innerHTML = newFridayText;              
            } else {
                fridays[index].innerHTML = fridaysArray[index];              
            }
        }
    });
}
      
let decemberFridays = [4, 11, 18, 25]
displayFridays(decemberFridays);
    
    // 6

function dayMouseOver() {
    let days = document.getElementById('days');
    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
        });
      }
      
function dayMouseOut() {
    let days = document.getElementById('days');
    days.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
        });
      }

dayMouseOver();
dayMouseOut();

      // 7 

function addpersonalizedTask(task){
    const myTask = document.getElementsByClassName('my-tasks')[0];
    const taskName = document.createElement('span');
    taskName.innerText = task;

    myTask.appendChild(taskName)
}

addpersonalizedTask('cozinhar');

    // 8 

function subtitleColor(color) {
   const divMyTasks = document.getElementsByClassName('my-tasks')[0]; 
   const divTask = document.createElement('div');
   divTask.classList.add('task');
   divTask.style.backgroundColor = color

   divMyTasks.appendChild(divTask);
}

subtitleColor('green');

    // 9 

function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    myTasks.addEventListener('click', function(event) {
        if (selectedTask.length === 0) {
        event.target.className = 'task selected';
        } else {
        event.target.className = 'task';
        }
    });
}

setTaskClass();

    // 10

function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
        
    days.addEventListener('click', function(event){
        let eventTargetColor = event.target.style.color;
        if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
        event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
        } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
        }
    });
}

setDayColor();

    // Bônus

function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
      
    addInputButton.addEventListener('click', function() {
        if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
      
        getTaskList.appendChild(newLi);
        getInputField.value = '';
        } else {
        alert('Error: Digite ao menos 1 caractere.');
        }
    });
      
    getInputField.addEventListener('keyup', function(event) {
        if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
      
        getTaskList.appendChild(newLi);
        getInputField.value = '';
        }
    });
}
      
addNewTask();
      





      



