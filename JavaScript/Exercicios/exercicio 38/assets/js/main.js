/*
# Escreva um programa que leia dois números inteiros e compare-os. mostrando na tela uma mensagem:
#- O primeiro valor é maior
#- O segundo valor é maior
#- Não existe valor maior, os dois são iguais
*/


const form = document.querySelector(".main-form");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector('.num2');
const div = document.querySelector(".div-resultado");

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  LimpaTela(div);
  const resultado = document.createElement('h4');
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  var maior = 0;
  var menor = 0;
  const n1 = Number(num1.value);
  const n2 = Number(num2.value);
  console.log(n1, n2)
  if (n1 > n2) {
    maior = n1;
    menor = n2;
  } else if (n1 < n2) {
    maior = n2;
    menor = n1;
  } else {
    maior = n1;
    menor = n2;
  }
  console.log(maior, menor);
  if (maior === menor) {
    console.log('sao iguais')
    resultado.innerHTML = `Os valores ${maior} e ${menor} são iguais`;
  } else{
    resultado.innerHTML = `O maior valor é ${maior} e o menor é ${menor}`
  }
})





function LimpaTela(e) {
  while (e.firstChild) {
    e.removeChild(e.firstChild)
  }
}