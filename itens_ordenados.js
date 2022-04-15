const verifica_itens = (dados = "") => {
  const array_itens = [];
  let verifica_itens_fechados;

  for (let i of dados) {
    if (i == "(" || i == "[") {
      array_itens.push(i);
    } else if (i == ")") {
      verifica_itens_fechados = verifica_ultimo_item_do_array_e_remove(
        array_itens,
        "("
      );
    } else if (i == "]") {
      verifica_itens_fechados = verifica_ultimo_item_do_array_e_remove(
        array_itens,
        "["
      );
    }
    if (verifica_itens_fechados == false) return false;
  }

  return array_itens.length == 0;
};

const verifica_ultimo_item_do_array_e_remove = (array_itens, valor) => {
  if (array_itens.length > 0 && array_itens[array_itens.length - 1]) {
    if (array_itens[array_itens.length - 1] == valor) {
      array_itens.pop();
    } else {
      return false;
    }
  } else {
    return false;
  }
  return true;
};

console.log(verifica_itens("(])"));
