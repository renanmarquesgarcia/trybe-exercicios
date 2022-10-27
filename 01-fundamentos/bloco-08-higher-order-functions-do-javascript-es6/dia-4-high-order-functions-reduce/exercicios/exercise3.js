// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  function containsA() {
    // escreva seu código aqui
    const getLetterA = (letter) => (letter === 'A' || letter === 'a')
            
      
    const string = names.reduce(((acc, curr) => `${acc}${curr}`));
    const characterA = string.split('').filter(getLetterA);
    return characterA.length;    
  }

   console.log(containsA()); 