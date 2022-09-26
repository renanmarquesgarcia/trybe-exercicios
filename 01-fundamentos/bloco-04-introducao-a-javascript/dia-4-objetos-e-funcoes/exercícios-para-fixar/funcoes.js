// 1 -Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// function calculadora (a, b, operador){
//     if (operador === '+'){
//         return a + b;
//     } else if (operador === '-'){
//         return a - b;
//     } else if (operador === '*'){
//         return a * b;
//     } else if (operador === '/'){
//         return a / b;
//     } else if (operador === '%'){
//         return a % b;
//     }
// }


//=========================================================================


// 2 - Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// function biggestNumber(a, b){
        
//     if (a > b){
//         return a + ': a é o maior número'
//     } else if (b > a){
//         return b + ': b é o maior número'
//     } else {
//         return 'Os números são iguais'
//     }
    
// }


//=========================================================================

// 3 - Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function biggestNumber(a, b, c){
    
    if(a > b && a > c){
        return a + ': a é o maior número'
    } else if (b > a && b > c){
        return b + ': b é o maior número'
    } else {
        return c + ': c é o maior número'
    }
}


//=========================================================================

// 4 - Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// function positiveNegative (num) {
//     if (num > 0){
//         return 'positive';
//     }
//     else if (num < 0){
//         return 'negative';
//     }
//     else {
//         return 'zero';
//     }
// }


//=========================================================================

// 5 - Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// function isTriangle(angleA, angleB, angleC){
//     if(angleA < 0 || angleB < 0 || angleC < 0){
//         return 'error, insira valores positivos'
//     } else if (angleA + angleB + angleC === 180){
//         return true;
//     }
//     else {
//         return false
//     }
// }





