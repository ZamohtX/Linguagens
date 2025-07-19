//          While e Do While - Estruturas de Repetição

let i = 0;
let nome = 'Thomaz';

while (i <= 10) {
    console.log(i)
    i++;
};
i = 0;
while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); 
}

const min = 1;
const max = 50
let rand = random(1, 50);


while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}



console.log('DO WHILE')

do {
    rand = random(min,max);
    console.log(rand);
} while (rand !== 10);



























