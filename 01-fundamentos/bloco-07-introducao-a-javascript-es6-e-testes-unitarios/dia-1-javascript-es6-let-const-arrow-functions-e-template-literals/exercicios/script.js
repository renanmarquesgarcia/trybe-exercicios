// Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.


//Antes
// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

//Depois
const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }    
  }

  testingScope(true);

// ---------------------------------------------------------------

// Crie uma função que retorne um array em ordem crescente.


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
const sort = oddsAndEvens.sort((a,b) => a - b);
return sort
};

console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`);

// ----------------------------------------------------------------
// Crie uma função que receba um número e retorne seu fatorial.

// Solução 1
// const factorial = (number) => {
//     let result = 1;
//     for (let index = 2; index <= number; index += 1){
//         result *= index;
//     }
//     return (`Esse é o fatorial ${result}`);

// }

// console.log(factorial(4));

// Solução 2
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(4));

// -----------------------------------------------------------------
// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

// Solução 1 
// const longestWord = (phrase) => {
//   const arrayPhrase = phrase.split(' ')
//   let maxLength = 0;
//   let result = ''

//   for(const word of arrayPhrase){
//     if (word.length > maxLength ) {
//       maxLength = word.length;
//       result = word;
//     }
//   }
//   return result;
// }

// Solução 2
const longestWord = (phrase) => {
    const arrayPhrase = phrase.split(' ');
    return arrayPhrase.sort((a, b) => b.length - a.length)[0]
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')) 

// -----------------------------------------------------------------
// Escreva uma função que substitua a letra ‘x’ em uma frase.

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!'
  const arrayFrase = frase.split(' ')  
  
  for(let index = 0; index < arrayFrase.length; index += 1){
    if(arrayFrase[index] === 'x'){
      arrayFrase[index] = nome;
      
    }
  }
  return (arrayFrase.join(' '))
}
console.log(substituaX('Renan'));

// -----------------------------------------------------------------------
// Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

const minhasSkills = (funcao1) => {
  const skills = ['JavaScript', 'HTML', 'CSS']
  let concatena = `${funcao1}\nMinhas três principais habilidades são:`;

  for (let index = 0; index < skills.length; index += 1) {
    concatena = `${concatena}
  - ${skills[index]}`;    
  }
  
  return concatena;
}

console.log(minhasSkills(substituaX('Renan')));