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

const factorial = (number) => {
    let result = 1;
    for (let index = 2; index <= number; index += 1){
        result *= index;
    }
    console.log(`Esse é o fatorial ${result}`);
}

factorial(4);

// -----------------------------------------------------------------
// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

const longestWord = (phrase) => {
    const arrayPhrase = phrase.split(' ');
    return arrayPhrase.sort((a, b) => b.length - a.length)[0]
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'

// -----------------------------------------------------------------
// Escreva uma função que substitua a letra ‘x’ em uma frase.

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!'
  const arrayFrase = frase.split(' ')  
  
  for(let index = 0; index < arrayFrase.length; index += 1){
    if(index === 1){
      arrayFrase[index] = nome;
      return (arrayFrase.join(' '))
    }
  }
  
}
console.log(substituaX('Renan'));


// const substituaX = (nome) => {
//   const frase = 'Tryber x aqui!'
//   let newPhrase = ''

//   for(let index = 0; index < frase.length; index += 1){
//     frase[index] === 'x' ? `${frase[index]} = ${nome}` : `${frase[index]} = ${frase[index]}`
//     newPhrase.push(frase[index]);
//   }
//   return newPhrase;
// }
// console.log(substituaX('Renan'));

// -----------------------------------------------------------------------
// Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

const minhasSkills = (funcao1) => {
  const skills = ['JavaScript', 'HTML', 'CSS']
  let concatena = `${funcao1} Minhas três principais habilidades são: ${skills[0]}, ${skills[1]} e ${skills[2]}.`
  return concatena
}

console.log(minhasSkills(substituaX('Renan')));