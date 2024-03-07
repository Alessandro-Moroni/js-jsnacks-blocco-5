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