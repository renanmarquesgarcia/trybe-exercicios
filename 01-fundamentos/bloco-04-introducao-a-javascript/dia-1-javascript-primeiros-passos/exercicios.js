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
//     console.log('a é o maior número');
// }
// else if(b > a && b > c){
//     console.log('b é o maior número');
// }
// else if(a == b && b == c){
//     console.log('todos os números são iguais')
// }

// else {
//     console.log('c é ao maior número')
// }



// 4 - Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// const a = -1;
// if(a > 0){
//     console.log('positivo');
// }
// else if(a == 0){
//     console.log('zero');
// }
// else{
//     console.log('negativo');
// }



// :rocket 5 - Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

// const a = 89.9;
// const b = 30;
// const c = 60;

// if (a < 0 || b < 0 || c < 0){
//     console.log('valor do ângulo inválido')
// }
// else if(a + b + c == 180){
//     console.log(true);
// }
// else{
//     console.log(false);
// }



// 6 - Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)





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



// rocket: Há um par entre nós 8 - Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// const a = 37
// const b = 48
// const c = 33

// if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// 9 - Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// const a = 30;
// const b = 40;
// const c = 51;

// if(a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }



// 10 - Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

// const valorCusto = 50;
// const valorVenda = 100;
// const impostoSobreOCusto = 0.2;

// let valorCustoTotal = valorCusto + (valorCusto * impostoSobreOCusto);
// let lucro = valorVenda - valorCustoTotal

// if(valorCusto < 0 || valorVenda < 0 || impostoSobreOCusto < 0 ){
//     console.log('Insira valores válidos');
// }
// else{
//     console.log(lucro * 1000);
// }


// let salarioBruto = 3500;
// let aliquotaInss = 0.11;
// let aliquotaIr = 0.15;
// let parcelaIr = 354.8;

// let salarioInss = salarioBruto - (salarioBruto * aliquotaInss);
// let salarioIR = (salarioInss * aliquotaIr) - parcelaIr;
// let salarioLiquido = salarioInss - salarioIR;

// if (salarioBruto < 0 || aliquotaInss < 0 || aliquotaIr < 0 || parcelaIr < 0){
//     console.log('insira valores válidos')
// }
// else {
//     console.log(salarioLiquido);
// }
