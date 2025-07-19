const info = document.querySelector('#info');
const form = document.querySelector(".main-form");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const masc = document.querySelector('#radio-masc');
const fem = document.querySelector('#radio-fem');
const div = document.querySelector('.div-resultado');


const pessoas = [];
let contador = 1;

form.addEventListener('submit', (e)=> {
  e.preventDefault();

  if (contador < 5) {
    const pessoa = {
      nome: nome.value,
      idade: Number(idade.value),
      sexo: checaSexo()
    }
    pessoas.push(pessoa);
    
    contador++
    info.innerHTML = `Digite os valores da ${contador}º pessoa`
    limpaCampos();
    console.log(pessoas);
  } 

  if (contador === 5) {
    const h1 = document.querySelector('.maioridade');
    const h4 = document.querySelectorAll('h4');
    const p = document.querySelectorAll('p');
    p.forEach((x)=> { x.remove() });
    h4.forEach((x)=> { x.remove() });
    nome.remove();
    h1.remove();
    idade.remove();
    masc.remove();
    fem.remove()
    const section = document.querySelector('.container');
    const info = document.createElement('h4');
    info.style.textAlign = 'center'
    section.insertBefore(info, section.firstChild);
    info.innerHTML = `Pressione "Enviar" para calcular informações`


    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btnSend = document.querySelector(".btn-send");
      btnSend.remove();
      const resultado = document.createElement('h4');
      resultado.style.textAlign = 'center';
      div.appendChild(resultado);
      const velho = homemVelho(pessoas);
      resultado.innerHTML = `A média de idade do grupo é de ${media(pessoas)} anos<br>`;
      resultado.innerHTML += `O homem mais velho tem ${velho.idade} anos, e se chama ${velho.nome}<br>`;
      resultado.innerHTML += `Ao todo temos ${mulher20(pessoas)} mulheres com menos de 20 anos` 
    }) 
  }
})

function mulher20 (array) {
  let totMulher = 0;
  for (let pessoa of array) {
    if (pessoa.sexo === 'Feminino') {
      if (pessoa.idade < 20) {
        totMulher++;
      }
    }
  }
  return totMulher;
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
  const velho = {
    nome: nomeVelho,
    idade: idadeVelho
  };
  return velho;
}

function media (array) {
  let total = 0;
  for (let pessoa of array) {
    total += pessoa.idade
  }
  return (total / array.length).toFixed(2);
}

function checaSexo(){
  if (masc.checked) return 'Masculino';
  if (fem.checked) return 'Feminino';
}

function limpaCampos() {
  nome.value = '';
  idade.value ='';
}

function limpaFilhos(e){
  while(e.firstChild){
    e.removeChild(e.firstChild);
  }
}