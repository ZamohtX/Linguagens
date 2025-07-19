//#Faça um programa que leia um ano qualquer e mostre se ele é bissexto.

const form = document.querySelector(".main-form");
const ano = document.querySelector(".ano");
const div = document.querySelector(".div-resultado");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  limpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
 
  const valorAno = ano.value
  if (ano.value === '') {
    const data = new Date();
    const anoAtual = data.getFullYear();
    if (anoAtual % 4 === 0 && anoAtual % 100 !== 0 & valorAno % 400 !== 0) {
      resultado.innerHTML = `O ano ${anoAtual} é BISSEXTO`;
    } else {
      resultado.innerHTML = `O ano ${anoAtual} NÃO é BISSEXTO`;
    }
  } else { 
      if (valorAno % 4 === 0 && valorAno % 100 !== 0 && valorAno % 400 !== 0){
        resultado.innerHTML = `O ano ${ano.value} é BISSEXTO`;
      } else {
        resultado.innerHTML = `O ano ${ano.value} NÃO é BISSEXTO`;
      }
  }
})

function limpaTela (e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}



