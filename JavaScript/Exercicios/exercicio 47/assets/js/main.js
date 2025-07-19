/*
 #Crie um programa que mostre na tela todos os números pares que estão no intervalo entre 1 e 50
*/

const form = document.querySelector(".main-form");
const div = document.querySelector('.div-resultado');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  limpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center'
  div.appendChild(resultado);
  let contador = 1;
  const contagem = setInterval(() => {
    if (contador % 2 === 0) {
      resultado.innerHTML += `${contador}<br>`;     
    }
    contador++;
    if (contador === 51) clearInterval(contagem);
  },100)
})

function limpaTela(e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}

