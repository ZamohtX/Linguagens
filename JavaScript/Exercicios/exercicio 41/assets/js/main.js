/*
#A Confederação Nacional de Natação precisa de um programa que leia o ano de nascimento de um atleta 
# e mostre sua categoria, de acordo com a idade:
'''- Até 9 anos: MIRIM
- Até 14 anos: INFANTIL
- Até 19 anos: JÚNIOR
- Até 25 anos: SÊNIOR
- Acima de 25 anos: MASTER'''
 */

const form = document.querySelector(".main-form");
const idadeAtleta = document.querySelector(".idade");
const div = document.querySelector('.div-resultado');

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  limpaTela(div);
  const resultado = document.createElement('h4');
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  const idade = Number(idadeAtleta.value);
  resultado.innerHTML = `O atleta tem ${idade} anos de idade.<br>`
  if (idade < 9) {
    resultado.innerHTML += `Sua classificação é MIRIM`;
  } else if (idade < 14) {
    resultado.innerHTML += `Sua classificação é INFANTIL`;
  } else if (idade < 19) {
    resultado.innerHTML += `Sua classificação é JÚNIOR `;
  } else if (idade <= 25) {
    resultado.innerHTML += `Sua classificação é SÊNIOR`;
  } else {
    resultado.innerHTML += `Sua classificação é MASTER`;
  }
});



function limpaTela(e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}





