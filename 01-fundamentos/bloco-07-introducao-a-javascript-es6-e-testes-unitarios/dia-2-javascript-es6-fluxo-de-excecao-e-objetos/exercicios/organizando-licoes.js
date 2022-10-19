const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  const addKeyLesson2 = (object, key, value) => object[key] = value;
    addKeyLesson2(lesson2, 'turno', 'noite');
    // console.log(lesson2);

// --------------------------------------------------------------------  

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const showTheKeys = object => Object.keys(object);
// console.log(showTheKeys(lesson1));

// --------------------------------------------------------------------  

// Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (object) =>  Object.keys(object).length;
// console.log(objectLength(lesson3));

// -------------------------------------------------------------------- 

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const showTheValues = (object) => Object.values(object);
// console.log(showTheValues(lesson1));

// -------------------------------------------------------------------- 

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// --------------------------------------------------------------------

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

// Solução 1
const studentsL1 = allLessons.lesson1.numeroEstudantes;
const studentsL2 = allLessons.lesson2.numeroEstudantes;
const studentsL3 = allLessons.lesson3.numeroEstudantes;

const sumStudents = () => studentsL1 + studentsL2 + studentsL3

// console.log(sumStudents());

// Solução 2
const totalStudents = (lessons) => {
    const keys = Object.keys(lessons);
    let result = 0

    for (let index in keys){
       const currentKey = keys[index];
       result += lessons[currentKey].numeroEstudantes      
    }
    return result;
}
// console.log(totalStudents(allLessons))

// --------------------------------------------------------------------

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueNumber = (object, position) => Object.values(object)[position];
// console.log(getValueNumber(lesson1, 1));

// --------------------------------------------------------------------

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (obj, key, value) => {
    const arrEntries = Object.entries(obj);
    let pairExists = false;
    for(let index in arrEntries) {
        if (arrEntries[index][0] === key && arrEntries[index][1] === value) {
            pairExists = true;
        } 
    }
    return pairExists
  };  

//   console.log(verifyPair(lesson3, 'turno', 'noite'));
//   console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));