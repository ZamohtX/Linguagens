//             FOR - Estrutura de Repetição






//  valor inicial       condição         incremento
for (let i = 0;          i <= 5;           i++) {
    console.log(i);
}

for (let i = 500; i >= 400; i -= 10) {
    console.log(i);
}


for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par': 'impar';
    console.log(i, par);
}


const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}: ${frutas[i]}`);
}











