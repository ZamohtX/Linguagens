// Funções

          //  Definindo Funções
function saudacao(nome) {
  return `Bom dia, ${nome}`;
}

function soma(x=0, y=0) {
  const resultado = x + y;
  return resultado
}


const variavel = saudacao('Thomaz');
console.log(variavel);

console.log(soma(5,8));
console.log(soma('ola ', 'mundo'))


          //  Funções Anônimas
const raiz = function (n) {
  return n ** 0.5;
};
console.log(raiz(25))

          // Arrow Function
const potencia = (x, y) => x ** y;

console.log(potencia(2,3));