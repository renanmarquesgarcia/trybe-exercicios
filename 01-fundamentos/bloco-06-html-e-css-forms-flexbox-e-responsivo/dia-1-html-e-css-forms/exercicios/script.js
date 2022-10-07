const submitButton = document.getElementById('submit-button');
const fullName = document.getElementById('full-name');
const email = document.getElementById('e-mail');
const buttons = document.getElementById('buttons');



function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();    
}
  

  
function clearFields(){
    const inputElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');

    for (let index = 0; index < inputElements.length; index += 1) {
        const userInput = inputElements[index];
        userInput.value = '';
        userInput.checked = false;                
    }
    textArea = '';
}

function ableSendFiles (){
    const privacityTerms = document.getElementById('privacityTerms');
    submitButton.disabled = !privacityTerms.checked;
    }

submitButton.addEventListener('click', function (){
    const textArea = document.querySelector('textarea');

    if(fullName.value.length < 10 || fullName.value.length > 40 || email.value.length < 10 || email.value.length > 50 || textArea.value.length > 500){
        alert ('Dados Inválidos')
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }

});


window.onload = function () {
    const privacityTerms = document.getElementById('privacityTerms');
    privacityTerms.addEventListener('change', ableSendFiles);

    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', clearFields);

    submitButton.addEventListener('click', handleSubmit);
    
  };