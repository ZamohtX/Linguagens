/* Faca um programa que analise um numero e diga se é primo ou não */

const form = document.querySelector(".main-form");
const num = document.querySelector("#num");
const div = document.querySelector(".div-resultado");

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  limpaFilhos(div);
  const resultado = document.createElement('h4');
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);

  const n = Number(num.value);
  let primo = false;
  let cont = 0;
  
  for (let c = 1; c <= n; c++) {
    if (n % c == 0) {
      cont++;
    }
    if (n === c && cont === 2) primo = true;
  }
  if (primo) {
    resultado.innerHTML = `O número ${num.value} é primo`;
  } else {
    resultado.innerHTML = `O número ${num.value} não é primo`;
  }


})

function limpaFilhos (e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}




















