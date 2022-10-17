let clickCounter = document.getElementById('counter');
const button = document.getElementById('button-click')

button.addEventListener('click', () => {
    clickCounter.innerHTML = ((parseInt(counter.innerHTML) + 1));
}) 