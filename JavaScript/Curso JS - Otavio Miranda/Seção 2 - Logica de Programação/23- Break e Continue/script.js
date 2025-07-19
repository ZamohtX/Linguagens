//                    Break e Continue  


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero % 2 === 0)  {
        continue; // Pula para a proxima iteração do laço
    } else {
        console.log(numero);
    }
}

for (let numero of numeros) {
    if (numero === 6) {
        break;
    }
    console.log(numero);
}



















































