const fibonacci_recursiva = (numero) => {
  if (numero === 1) return 1;
  if (numero === 2) return 2;
  return fibonacci_recursiva(numero - 1) + fibonacci_recursiva(numero - 2);
};

console.log(fibonacci_recursiva(7));

/*  1  2  3  4  5   6   7   8
   [1, 2, 3, 5, 8, 13, 21, 34] */

const fibonacci_for = (numero) => {
  let resultado = [1, 1];
  for (i = 2; i <= numero; i++) {
    let anterior_1 = resultado[i - 1];
    let anterior_2 = resultado[i - 2];
    resultado.push(anterior_1 + anterior_2)
  }
  return resultado[resultado.length - 1];
};

console.log(fibonacci_for(7));
