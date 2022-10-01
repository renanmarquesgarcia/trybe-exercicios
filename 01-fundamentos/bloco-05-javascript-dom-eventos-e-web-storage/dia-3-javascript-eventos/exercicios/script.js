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
    



    

