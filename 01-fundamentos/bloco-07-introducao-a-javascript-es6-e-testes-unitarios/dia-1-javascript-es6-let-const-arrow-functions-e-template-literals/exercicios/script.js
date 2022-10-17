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

