/*
'''Refaça o DESAFIO 035 dos triângulos, acrescentando o recurso de mostrar que tipo de triângulo será formado:
- EQUILÁTERO: todos os lados iguais
- ISÓSCELES: dois lados iguais, um diferente
- ESCALENO: todos os lados diferentes
'''
 */

const form = document.querySelector(".main-form");
const reta1 = document.querySelector(".reta1");
const reta2 = document.querySelector('.reta2');
const reta3 = document.querySelector('.reta3');
const div = document.querySelector('.div-resultado');

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  limpaTela(div);
  const resultado = document.createElement('h4');
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  const retas = [Number(reta1.value), Number(reta2.value), Number(reta3.value)]
  console.log(retas)
  if (retas[0] < retas[1] + retas[2] && retas[1] < retas[0] + retas[2] && retas[2] < retas[0] + retas[1]) {
    if (retas[0] === retas[1] && retas[1] === retas[2]) {
      resultado.innerHTML = `Os segmentos formam um triângulo isósceles.`;
    } else if (retas[0] !== retas[1] && retas[1] !== retas[2] && retas[0] !== retas[2]) {
      resultado.innerHTML = `Os segmentos formam um triângulo escaleno.`;
    } else {
      resultado.innerHTML = `Os segmentos formam um triângulo retângulo.`;
    }
  } else{
    resultado.innerHTML = 'Os segmentos de reta NÃO podem formar triângulo'
  }

});



function limpaTela(e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}





