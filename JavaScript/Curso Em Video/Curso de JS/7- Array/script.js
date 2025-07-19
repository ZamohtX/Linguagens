

// Criando um Array 
let num  = [4,5,1,3,2,1,4];
console.log(num)

// Adicionando valor dentro do Array
num.push(9)

// Pegando um item do Array
console.log(num[2]);

// Tamanho do Array
console.log(num.length);

// Ordenando em Ordem Crescente
console.log(num.sort())

// Buscando valor dentro do Array
console.log(num.indexOf(1));

// Iterando sob o Array com For
    // For In
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
    // For Tradicional
for (let pos = 0; pos <num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}