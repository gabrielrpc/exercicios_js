function ordenar(array) {
  let recebe_maior = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      recebe_maior = array[i];
      array[i] = array[i + 1];
      array[i + 1] = recebe_maior;
      ordenar(array)
    }
  }
  return array
}

console.log(ordenar([1,2,3,4,5,6,0]));
