const calcula_potencia = (base, expoente) => {
  return expoente === 0 ? 1 : base * calcula_potencia(base, expoente - 1);
};

console.log(calcula_potencia(7, 2));
