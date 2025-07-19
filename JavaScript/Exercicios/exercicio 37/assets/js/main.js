/*#Escreva um programa para aprovar o empréstimo bancário para a compra de uma casa.
#  Pergunte o valor da casa, o salário do comprador e em quantos anos ele vai pagar.
#  A prestação mensal não pode exceder 30% do salário ou então o empréstimo será negado.  */
const form = document.querySelector(".main-form");
const valor = document.querySelector('.valor');
const binario = document.querySelector(".binario");
const hexa = document.querySelector('.hexa');
const octal = document.querySelector(".octal");
const div = document.querySelector(".div-resultado");



binario.addEventListener('click', (e) => {
  LimpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  const bi = Number(valor.value).toString(2);
  resultado.innerHTML = `O número ${valor.value} corresponde a ${bi} em binário`
});

octal.addEventListener('click', (e) => {
  LimpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  const oct = Number(valor.value).toString(8);
  resultado.innerHTML = `O número ${valor.value} corresponde a ${oct} em octal`
});


hexa.addEventListener('click', (e) => {
  LimpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  const hex = Number(valor.value).toString(16);
  resultado.innerHTML = `O número ${valor.value} corresponde a ${hex} em hexadecimal`
});






function LimpaTela(e) {
  while (e.firstChild) {
    e.removeChild(e.firstChild)
  }
}