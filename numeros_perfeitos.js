const verifica_numero_perfeito = (num) => {
  let contador = 1;
  let somar_numeros = 0;

  while (contador < num) {
    if (num % contador == 0) {
      somar_numeros += contador
    }
    contador++;
  }


  return somar_numeros == num
};

console.log(verifica_numero_perfeito(6));
