/*
'''  Desenvolva uma lógica que leia o peso e a altura de uma pessoa, calcule 
seu Índice de Massa Corporal (IMC) e mostre seu status, de acordo com a tabela abaixo:
- IMC abaixo de 18,5: Abaixo do Peso
- Entre 18,5 e 25: Peso Ideal
- 25 até 30: Sobrepeso
- 30 até 40: Obesidade
- Acima de 40: Obesidade Mórbida'''
*/

const form = document.querySelector(".main-form");
const peso = document.querySelector(".peso");
const altura = document.querySelector(".altura");
const div = document.querySelector('.div-resultado');

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  limpaTela(div);
  const resultado = document.createElement('h4');
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  const imc =( Number(peso.value) / (Number(altura.value) ** 2)).toFixed(2);
  resultado.innerHTML = `Seu IMC é de ${imc}<br>`;
  if (imc < 18.5) {
    resultado.innerHTML += `Você está DESNUTRIDO! Se alimente!`
  } else if (imc < 25) {
    resultado.innerHTML += 'Parabéns! <br> Voce esta na faixa de PESO NOIRMAL'
  } else if (imc < 30) {
    resultado.innerHTML += 'Você está em SOBREPESO! <br> Tome cuidado!!'
  } else if (imc < 40) {
    resultado.innerHTML += 'Você está na faixa de OBESIDADE!<br> Cuide da sua saúde imediatamente'
  } else {
    resultado.innerHTML += 'Você está em OBESIDADE MÓRBIDA!!!<br>  Procure um médico com urgência!!!'
  }
});



function limpaTela(e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}




