/*
Desenvolva um programa que pergunte a distância de uma viagem em Km.
 alcule o preço da passagem, cobrando R$0,50 por Km para viagens de até 200Km e R$0,45 parta viagens
 mais longas.
*/

const form = document.querySelector(".main-form");
const distancia = document.querySelector(".km");
const div = document.querySelector(".div-resultado");

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  LimpaTela(div);

  const h4 = document.createElement('h4');
  h4.style.textAlign = 'center';
  div.appendChild(h4);
  const km = Number(distancia.value);
  if( km <= 200 ) {
    var precoViagem = km * 0.50;
  } else {
    var precoViagem = km * 0.45;
  }
  h4.innerHTML = `O preço da sua viagem será de R$${precoViagem.toFixed(2)}`


})

function LimpaTela (e) {
  while (e.firstChild) {
    e.removeChild(e.firstChild);
  }
}