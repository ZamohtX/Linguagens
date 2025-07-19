/*
# Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento.
#  Para salários superiores a R$1250,00, calcule um aumento de 10%. Para os inferiores ou iguais,
#  o aumento é de 15%.
*/

const form = document.querySelector(".main-form");
const salario = document.querySelector(".salario");
const div = document.querySelector(".div-resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var valorSalario = Number(salario.value);

  if (valorSalario > 1250) {
    var salarioFinal = (valorSalario+(valorSalario*10/100)).toFixed(2)
  } else {
    var salarioFinal = (valorSalario+(valorSalario*10/100)).toFixed(2)
  }

  const resultado = document.createElement("h3");
  resultado.style.textAlign = 'center'
  div.appendChild(resultado);
  resultado.innerHTML = `Quem ganha R$${Number(salario.value).toFixed(2)}<br> passará a ganhar R$${salarioFinal} `
})
