// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.

// const a = 23;
// const b = 11;

// console.log('Soma: ' + (a + b));
// console.log('Subtrai: ' + (a - b));
// console.log('multiplica: ' + (a * b));
// console.log('divide: ' + (a / b));
// console.log('resto: ' + (a % b));



// 2 - Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados

// const a = 180;
// const b = 179.9;

// if(a > b){
//     console.log('a é maior que b');
// } 
// else if(a == b){
//     console.log('os números são iguais')
// } else {
//     console.log('b é maior que a')
// }



// 3 - Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// const a = 9;
// const b = 5;
// const c = 10;

// if(a > b && a > c){
//     console.log('O maior número é:' + a + ' (a)');
// }
// else if(b > a && b > c){
//     console.log('O maior número é:' + b + ' (b)');
// }
// else if(a == b && b == c){
//     console.log('Todos os números são iguais')
// }

// else {
//     console.log('O maior número é:' + c + ' (c)')
// }



// 4 - Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// const a = -1;
// if(a > 0){
//     console.log('positive');
// }
// else if(a == 0){
//     console.log('zero');
// }
// else{
//     console.log('negative');
// }



// :rocket 5 - Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

// const degreeAngleA = 65;
// const degreeAngleB = 100;
// const degreeAngleC = 15;

// let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

// let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

// if(allAnglesArePositives){
//   if (sumOfAngles === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('Erro: ângulo inválido');
// }



// 6 - Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

// let chessPiece = 'cavalo'

// switch(chessPiece.toLowerCase()){
//     case 'rei':
//         console.log("Rei: Uma casa em qualquer direção");
//         break;
//     case 'rainha':
//         console.log("Rainha: horizontais, verticais e diagonais");
//         break;
//     case 'bispo':
//         console.log("Bispo: diagonais ");
//         break;
//     case 'cavalo':
//         console.log("Cavalo: movimento em L");
//         break;
//     case 'torre':
//         console.log("Torre: horizontais e verticais");
//         break;
//     case 'peão':
//         console.log("Peão: uma casa para frente, no primeito movimento podem ser duas, captura peças só em diagonais");
//         break;
//     default:
//         console.log('nome da peça inválido');
// }



// 7 - Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// let nota = 83;

// if(nota < 0 || nota > 100){
//     console.log('nota inválida, insira um valor válido')
// }
// else if(nota >= 90){
//     console.log('A');
// }
// else if(nota >= 80){
//     console.log('B');
// }
// else if(nota >= 70){
//     console.log('C');
// }
// else if(nota >= 60){
//     console.log('D');
// }
// else if(nota >= 50){
//     console.log('E');
// }
// else {
//     console.log('F');
// }



// rocket: 8 (Há um par entre nós) - Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// const a = 37;
// const b = 48;
// const c = 33;

// let parEntreNos = false;

// if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//     parEntreNos = true;
// };
// console.log(parEntreNos);


// 9 - Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// const a = 30;
// const b = 40;
// const c = 50;

// let imparEntreNos = false;

// if(a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
//     imparEntreNos = true;
// };
// console.log(imparEntreNos);




// 10 - Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);


// const costOfProduct = 1;
// const saleValue = 3;

// if (costOfProduct >= 0 && saleValue >= 0) {
//   const totalCostOfProduct = costOfProduct * 1.2;
//   const totalProfit = (saleValue - totalCostOfProduct) * 1000;
//   console.log(totalProfit);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// };



// 11- Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let aliquotINSS;
let aliquotIR;

let grossSalary = 3000;

if (grossSalary <= 1556.94){
    aliquotINSS = grossSalary * 0.08
} else if (grossSalary <= 2594.92){
    aliquotINSS = grossSalary * 0.09
} else if (grossSalary <= 5189.82){
    aliquotINSS = grossSalary * 0.11
} else {    
    aliquotINSS = 570.88;
};

let baseSalary = grossSalary - aliquotINSS;

if(baseSalary <= 1903.98){
    aliquotIR = 0;
} else if(baseSalary <= 2826.65){
    aliquotIR = (baseSalary * 0.075) - 142.8;
} else if(baseSalary <= 3751.05){
    aliquotIR = (baseSalary * 0.15) - 354.8;
} else if(baseSalary <= 4664.68){
    aliquotIR = (baseSalary * 0.225 ) - 636.13;
} else {
    aliquotIR = (baseSalary * 0.275 ) - 869.36
};

console.log('Salário Líquido: ' + (baseSalary - aliquotIR));