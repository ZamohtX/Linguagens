

// Condição Simples
var vel = 80;
console.log(`a velocidade do seu carro é ${vel}Km/h`);
if (vel > 60) {
    console.log('Voce ultrapassou a velocidade permitida. MULTADO!');
}
console.log('Dirija sempre usando cinto de segurança');


// Condição Composta
var pais = 'Brasil';
console.log(`Seu pais é: ${pais}`);
if (pais !== 'Brasil') {
    console.log('Você é um estrangeiro');
} else { 
    console.log('Você é Brasileiro');
}

// Condições Aninhadas
var idade = 22;
console.log(`Você tem ${idade} anos`);
if (idade < 16) {
    console.log('Não Vota');
} else if( idade < 18 || idade > 65) {
    console.log('Voto Opcional');
} else {
    console.log('Voto Obrigatorio');
}

// Switch e Case
var data = new Date();
var diaSemana = data.getDay();
console.log(diaSemana);
switch(diaSemana) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('ERRO: Dia Invalido');
        break
}
