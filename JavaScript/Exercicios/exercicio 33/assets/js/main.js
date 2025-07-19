// #Faça um programa que leia três números e mostre qual é o maior e qual é o menor.

const form = document.querySelector(".main-form");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const div = document.querySelector(".div-resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  limpaTela(div);

  const array = [Number(num1.value), Number(num2.value), Number(num3.value)]
  let cont = 0;
  let maior;
  let menor
  while (true) {
    if (cont > array.length) break;
    if (cont === 0){
      maior = array[0];
      menor = array[0];
    }
    if (array[cont] > maior) maior = array[cont];
    if (array[cont] < menor) menor = array[cont];
    cont++
  }
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  resultado.innerHTML = `O maior valor é ${maior}<br>
                         O menor valor é ${menor}.`;
})


function limpaTela(elemento){
  while(elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}