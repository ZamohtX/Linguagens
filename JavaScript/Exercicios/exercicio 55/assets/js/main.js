/*
'''Faça um programa que leia o peso de cinco pessoas. No final,
 mostre qual foi o maior e o menor peso lidos.'''
*/

const form = document.querySelector(".main-form");
const titulo = document.querySelector('.titulo');
const peso = document.querySelector("#peso");
const div = document.querySelector(".div-resultado");
const btn = document.querySelector(".send");

const pesosPessoas = [];
let contador = 1;
btn.onclick = () => {
  limpaFilhos(div);
  contador++;
  const pesoPessoa = Number(peso.value)
  pesosPessoas.push(pesoPessoa);
  if (contador === 6) {
    titulo.innerHTML = `RESULTADO`
  } else {
    titulo.innerHTML = `Digite o peso da ${contador}º pessoa`
  }
  if (pesosPessoas.length === 5) {
    btn.value = 'Calcular';
    btn.onclick = ()=> {
      limpaFilhos(div);
      const resultado = document.createElement("h4");
      resultado.style.textAlign = 'center';
      div.appendChild(resultado);
      let cont = 0;
      let maior = 0;
      let menor = 0;
      for (let p of pesosPessoas ) {
        cont++
        if (cont === 1) {
          maior = p;
          menor = p;
        }
        if (p > maior) maior = p;
        if (p < menor) menor = p;
      }
      resultado.innerHTML = `O maior peso é de ${maior}Kg <br>O menor peso é de ${menor}Kg`;
      
    }
  }
}

function limpaFilhos(e) {
  while(e.firstChild){
    e.removeChild(e.firstChild);
  }
}





