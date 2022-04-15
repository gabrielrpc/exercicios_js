const retorna_potencia = (x, z) => {
  let potencia = 0;
  let resultado = 1;

  if (z < 0 && x < 0) {
    resultado = -1;
  }

  z = z < 0 ? -z : z;
  while (potencia < z) {
    resultado *= x;
    potencia++;
  }

  return resultado;
};

console.log(retorna_potencia(7, 2));
