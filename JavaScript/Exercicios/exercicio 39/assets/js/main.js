/*
# Faça um programa que leia o ano de nascimento de um jovem e informe, de acordo com a sua idade,
#  se ele ainda vai se alistar ao serviço militar, se é a hora exata de se alistar ou se já passou do tempo
#  do alistamento. Seu programa também deverá mostrar o tempo que falta ou que passou do prazo. */

const form = document.querySelector(".main-form");
const nasc = document.querySelector(".nasc");
const div = document.querySelector('.div-resultado');
const data = new Date();


form.addEventListener('submit', (e)=> {
  e.preventDefault();
  limpaTela(div);
  const resultado = document.createElement('h4');
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  const dataAtual = Number(data.getFullYear());
  const idade = dataAtual - Number(nasc.value);
  resultado.innerHTML = `Quem nasceu em ${nasc.value} tem ${idade} anos de idade<br>`
  if (idade === 18) resultado.innerHTML += `Você precisa se alistar IMEDIATAMENTE`
  if (idade > 18) resultado.innerHTML += `Voce deveria ter se alistado a ${idade-18} anos atrás.<br>Procure uma reserva militar!`
  if (idade < 18) resultado.innerHTML += `Seu alistamento será no ano de ${(18-idade) -dataAtual}`
})

function limpaTela(e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}

