// Nova pessoa contratada
// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

// Solução 1
// const employee = (fullName) => {
//   const obj = {Nome: fullName,
//     email: `${fullName.toLowerCase().replace(/[\ ]/g, "_")}@trybe.com`,
//     }
//     return obj
// }

// const newEmployees = (callback) => {
//     const employees = {
//       id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

// console.log(newEmployees(employee));


// Solução 2
const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
  };
  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };
//   console.log(employeeGenerator('Pedro Guerra'));

// ---------------------------------------------------------------

// Sorteador de loteria
// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

// Solução 1
const generateRandomNumber = () => Math.ceil((Math.random() * 5));

const checkNumber = (betNumber, drawnNumber) => {
    if (betNumber === drawnNumber) {
        console.log('Parabéns você ganhou');
    } else {
        console.log('Tente novamente');
    }
}

checkNumber(1, generateRandomNumber())

// Solução 2
const numberChecker = (myNumber, number) => myNumber === number;
const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};
console.log(lotteryResult(2, numberChecker));

// ---------------------------------------------------------------

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers) {
        return 1;
    } else if (studentAnswers === 'N.A') {
        return 0;
    } else {
        return -0.5
    }
}

const automaticCheck = (rightAnswers, studentAnswers, callback) => {
    let count = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
       count += callback(rightAnswers[index], studentAnswers[index]);         
    }
    return `A sua nota é: ${count}`;
}

console.log(automaticCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));