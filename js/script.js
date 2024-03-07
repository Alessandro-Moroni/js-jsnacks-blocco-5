// SNACK 1

const zucchine = [
  {
    nome: 'Milano',
    peso: 40,
    lunghezza: 26,
  },
  {
    nome: 'Romanesco',
    peso: 30,
    lunghezza: 18,
  },
  {
    nome: 'Faenza',
    peso: 25,
    lunghezza: 20,
  },
  {
    nome: 'fiorentina',
    peso: 22,
    lunghezza: 8,
  },
  {
    nome: 'siciliana',
    peso: 80,
    lunghezza: 35,
  },
  {
    nome: 'Napoli',
    peso: 24,
    lunghezza: 7,
  },
  {
    nome: 'triestina',
    peso: 19,
    lunghezza: 14,
  },
  {
    nome: 'pugliese',
    peso: 60,
    lunghezza: 27,
  },
  {
    nome: 'Piacenza',
    peso: 68,
    lunghezza: 26,
  },
  {
    nome: 'Nizza',
    peso: 15,
    lunghezza: 8,
  },
]

let somma = 0;
for(let zucchina of zucchine){
   somma += zucchina.peso;
}
console.log(somma);




// SNACK 2
const zucchineDue = [
  {
    nome: 'Milano',
    peso: 40,
    lunghezza: 26,
  },
  {
    nome: 'Romanesco',
    peso: 30,
    lunghezza: 18,
  },
  {
    nome: 'Faenza',
    peso: 25,
    lunghezza: 20,
  },
  {
    nome: 'fiorentina',
    peso: 22,
    lunghezza: 8,
  },
  {
    nome: 'siciliana',
    peso: 80,
    lunghezza: 35,
  },
  {
    nome: 'Napoli',
    peso: 24,
    lunghezza: 7,
  },
  {
    nome: 'triestina',
    peso: 19,
    lunghezza: 14,
  },
  {
    nome: 'pugliese',
    peso: 60,
    lunghezza: 27,
  },
  {
    nome: 'Piacenza',
    peso: 68,
    lunghezza: 26,
  },
  {
    nome: 'Nizza',
    peso: 15,
    lunghezza: 8,
  },
]

const zucchineLunghe = zucchineDue.filter(zucchina => zucchina.lunghezza > 15);
const zucchineCorte = zucchineDue.filter(zucchina => zucchina.lunghezza < 15);
console.log(zucchineLunghe);
console.log(zucchineCorte);

let sommaLunghe = 0;
for(let zucchinaLunga of zucchineLunghe){
  sommaLunghe += zucchinaLunga.peso;
}
console.log(sommaLunghe);

let sommaCorte = 0;

for(let zucchinaCorta of zucchineCorte){
  sommaCorte += zucchinaCorta.peso;
}
console.log(sommaCorte);

// SNACK 3


function reverseWord(string){
  return string.split('').reverse().join('');
};

console.log(reverseWord('zucchina'));

// SNACK 4

const arrUno = [1, 2, 3];
const arrDue = ['a', 'b', 'c'];

const arrTre = [];

for(let i = 0; i < arrUno.length; i++){
  arrTre.push(arrUno[i]);
  arrTre.push(arrDue[i]);
}

console.log(arrTre);

// SNACK 5

const primoNum = 2;
const secondoNum = 5;
const arrNum = [0, 1, 2, 3, 4, 5];

function rangeNumber(min, max, arr){
  if(max < 0){
    return[];
  }
  return arr.filter((element, index) => index >= min && index < max);
}

const numExtr = rangeNumber(primoNum, secondoNum, arrNum);
console.log(numExtr);

// function rangeNumber(min, max, arr){
//   if(max < 0 || arr > min.length || max > arr){
//     return[];
//   }
//   return arr.filter((element, index) => index >= min && index < max);
// }

// const numExtr = rangeNumber(primoNum, secondoNum, arrNum);
// console.log(numExtr);