function media (array) {
  let total = 0;
  for (let pessoa of array) {
    total += pessoa.idade
  }
  return total / array.length;
}

function homemVelho(array) {
  let cont = 1;
  let nomeVelho = '';
  let idadeVelho = 0;
  for (let pessoa of array) {
    if (pessoa.sexo === 'Masculino') {
      if (cont === 1) {
        nomeVelho = pessoa.nome;
        idadeVelho = pessoa.idade;
      } else {
        if (pessoa.idade > idadeVelho ){
          nomeVelho = pessoa.nome;
          idadeVelho = pessoa.idade;
        }
      }
      cont++;
    }
  }
  const velho = [nomeVelho, idadeVelho];
  return velho;
} 






