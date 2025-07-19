

const form = document.querySelector(".main-form");
const num = document.querySelector("#num")
const div = document.querySelector('.div-resultado');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  limpaTela(div);
  const resultado = document.createElement("h4");
  div.appendChild(resultado);
  
  for (let c = 1; c <= 10; c++) {
    resultado.innerHTML += `${num.value} x ${c} = ${Number(num.value) * c}<br>`;
  }
})


function limpaTela(e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}

