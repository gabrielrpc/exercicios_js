const calcula_fatorial = (num) => {
  let resultado = 1;

  while (num >= 1) {
    resultado *= num;
    num = num - 1;
  }
  return resultado;
};

console.log(calcula_fatorial(5));

const calcula_fatorial_recursivo = (numero) => {
  if( numero === 0) return 1
  return numero * calcula_fatorial_recursivo(numero - 1);
};
console.log(calcula_fatorial_recursivo(1));

// calcula_fatorial_recursivo(5) => numero * calcula_fatorial_recursivo(4) =>
//numero * calcula_fatorial_recursivo(3) => numero * calcula_fatorial_recursivo(2) =>
//numero * calcula_fatorial_recursivo(1)
