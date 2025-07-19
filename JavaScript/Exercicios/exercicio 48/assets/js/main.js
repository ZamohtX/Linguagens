/* 
''' Faça um programa que calcule a soma entre todos os números que são múltiplos de três 
e que se encontram no intervalo de 1 até 500.'''
*/


const form = document.querySelector(".main-form");
const div = document.querySelector('.div-resultado');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  limpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  let soma = 0;
  let v = 0;
  const contar = setInterval(()=> { 
    if (v === 501) clearInterval(contar);
    if (v % 3 === 0) {
      soma = soma + v;
    }
    resultado.innerHTML = `A soma dos mutiplos de 3 no intevalo é de ${soma}`;
    v++;
  }, 10)
})


function limpaTela(e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}

