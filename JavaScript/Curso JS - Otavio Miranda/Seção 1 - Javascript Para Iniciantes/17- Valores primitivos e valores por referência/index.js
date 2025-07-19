/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

                          -> São valores que são imutaveis e independentes  */
let a = 'Thomaz';
let b = a;
a = 'William'
console.log(a,b)

/*
Referência (mutável) - array, object, function 

                          -> Valores mutaveis e dependentes   */
a = [1 , 2, 3, 4, 5];
b = a;    // Apontam para o mesmo lugar na memoria
a.push(4);
console.log(a, b);

const x = {
  nome: 'Thomaz',
  sobrenome: 'Xavier',
};
const y = x;
x.nome = 'Junior';
console.log(x, y);

// Para fazer uma copia real é preciso fazer isso:
c = [...a];
a.pop();
console.log(a,b,c);

const z = {
  nome: 'Thomaz',
  sobrenome: 'Xavier',
};
const w = {...z};
z.nome = 'Junior';
console.log(z, w);


