// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  
// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula. 
// Solução 1
function containsA() {
  // escreva seu código aqui
  const getLetterA = (letter) => (letter === 'A' || letter === 'a');

  const string = names.reduce(((acc, curr) => `${acc}${curr}`))
  const quantityOfAs = string.split('').filter(getLetterA).length;
  return quantityOfAs;
    
}

console.log(containsA()); 

// Solução 2
// function containsA() {
//   let totalOfLettersA = 0;
//   names.forEach((name) => {
//     const lettersFromName = name.split('');    
//     totalOfLettersA += lettersFromName.reduce((lettersAInName, currentLetter) => {
//       if (currentLetter === 'a' || currentLetter === 'A') {
//         return lettersAInName + 1;
//       }
//       return lettersAInName;
//     }, 0);
//   });
//   return totalOfLettersA;
// }
