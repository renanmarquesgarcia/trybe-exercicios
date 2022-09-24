// 1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// let factorial = 1;

// for(let index = 10; index > 0; index -= 1){
//     factorial *= index;
// }

// console.log(factorial);


//=========================================================================


// 2 - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let wordBackwards = '';

// for (let index = word.length - 1; index >= 0; index -= 1){
//     wordBackwards += word[index];
// }
// console.log(wordBackwards);

// Outra solução possível:

// wordBackwards = word.split('').reverse().join('');

// console.log(wordBackwards)


//=========================================================================


// 3 - Considere o array de strings abaixo:

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// biggestWord
// let biggestWord = array[0]

// for(let index = 1; index < array.length; index += 1){
//     if (array[index].length > biggestWord.length){
//         biggestWord = array[index];
//     }    
// }
// console.log(biggestWord);

//smalestWord

// let smallestWord = array[0];

// for(let index = 1; index < array.length; index += 1){
//     if(array[index].length < smallestWord.length){
//         smallestWord = array[index];
//     }
// }
// console.log(smallestWord);


//=========================================================================


// 4 - Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

// for(let numerator = 2; numerator <= 50; numerator += 1){
//     let isPrime = true;
//     for(let denominator = 2; denominator < numerator; denominator += 1){
//         if(numerator % denominator === 0){
//             isPrime = false
//         }         
//     }
//     if(isPrime === true){
//         biggestPrimeNumber = numerator
//     }
// }

// console.log(biggestPrimeNumber);