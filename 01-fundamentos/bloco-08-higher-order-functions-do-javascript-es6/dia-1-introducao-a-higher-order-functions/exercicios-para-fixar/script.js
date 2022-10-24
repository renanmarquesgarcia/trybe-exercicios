// Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => 'Acordando!!';

// Crie outra função que retorne a string 'Bora tomar café!!';
const breakfast = () => 'Bora tomar café!!';

// Crie mais uma função que retorne a string 'Partiu dormir!!';
const sleep = () => 'Partiu dormir!!';

// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

// Solução 1
// const doingThings = (func) => console.log(func); 

// solução 2 
const doingThings = (callback) => {
    const result = callback();
    console.log(result);
  };

doingThings(wakeUp); 
doingThings(breakfast); 
doingThings(sleep);



