let numero = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz-quadrada');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('NaN');
const arredondaBaixo = document.getElementById('arredondado-baixo');
const arredondaCima  = document.getElementById('arredondado-cima');
const duasCasas = document.getElementById('duas-casas');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = `<p><strong>Raiz Quadrada: ${Math.sqrt(numero)}<strong/><p/>`;
inteiro.innerHTML = `<p>${numero} é inteiro? ${Number.isInteger(numero)}<p/>`;
nan.innerHTML = `<p>É NaN? ${Number.isNaN(numero)}<p/>`;
arredondaBaixo.innerHTML = `<p>Arredondado para baixo: ${Math.floor(numero)}<p/>`;
arredondaCima.innerHTML = `<p>Arredondado para cima: ${Math.ceil(numero)}<p/>`;
duasCasas.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}<p/>`;
