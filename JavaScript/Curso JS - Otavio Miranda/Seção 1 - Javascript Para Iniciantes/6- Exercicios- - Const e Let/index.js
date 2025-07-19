const nome = 'Thomaz';
const sobrenome = 'Xavier';
const idade = 20;
const peso = 100;
const altura = 1.76;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

 // F-Strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg.`)
console.log(`tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)
