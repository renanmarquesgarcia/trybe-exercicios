const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// Adicione o código do exercício aqui:
// Crie uma string com os nomes de todas as pessoas autoras.
// Soluçã 1
function reduceNames() {
  // escreva seu código aqui
  const authors = books.map((book) => book.author.name);
  return authors.reduce((accName, currName) => `${accName}, ${currName}`) + '.';
}

// console.log(reduceNames());

// Solução 2 
// function reduceNames() {
//   return books.reduce((acc, book) =>  `${acc} ${book.author.name}.`, '');
// }

// console.log(reduceNames());

// -------------------------------------------------------------------------

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// Solução 1
// function averageAge() {
//   // escreva seu código aqui
//   const ages = books.map((book) => book.releaseYear - book.author.birthYear);
//   return ages.reduce((accAge, currAge) => accAge + currAge)/ages.length;
// }

// console.log(averageAge());

// Solução 2
function averageAge() {
  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => (
    sum + (book.releaseYear - book.author.birthYear)
  ), 0);
  return sumOfAges / numberOfBooks;
}

// console.log(average());

// ---------------------------------------------------------------------------

// Encontre o livro com o maior nome.

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((accBook, currBook) => 
  (accBook.name.length > currBook.name.length) ? accBook : currBook)
}

//   console.log(longestNamedBook());

