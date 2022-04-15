/*
considere as seguintes quatro moedas: 25, 10, 5, 1.
construa um programa em que o usuario diga o quanto quer de troco e em seguida imprima a quantidade de moedas 
necessarias para pagar o troco, entregando sempre o menor numero de moedas. 
o programa deve ter um loop que obrigue o usuário a colocar um valor positivo
*/



const moedas = [0.25, 0.1, 0.05, 0.01];
let troco = 1.16;

for (let i = 0; i < moedas.length; i++) {
  let quantidade_moedas = parseInt(troco / moedas[i]);

  if (quantidade_moedas > 0) {
    console.log(troco)
    troco = (troco % moedas[i]).toFixed(2);
  }

  console.log(`Total de ${quantidade_moedas} moedas de ${moedas[i]} centavos.`);
}
