

const lista = [];
let cont = 0;
function adicionar() {
    tab = document.querySelector('#sellista')
    let numero = document.querySelector("#txtn");
    let num = Number(numero.value);
    // verificacoes
    if (numero.value.length == 0) {
        alert('Digite um número para prosseguir');
        return;
    }
    if (num > 100 || num < 1) {
        alert('Digite um número entre 1 e 100 para prosseguir');
        return;
    }
    if (lista.indexOf(num) !== (-1) ) {
        alert("Valor ja existente na lista, não vou adicionar");
        return;
    }
    numero.value = '';
    numero.focus();
    let div = document.querySelector('#gerar-resultado');
    div.innerHTML = ''
        // codigo principal
    let item = document.createElement('option');
    item.text = `Valor ${num} adicionado.`
    item.value = `tab${cont}`
    cont++;
    tab.appendChild(item);
    lista.push(num);
}

function finalizar(){ 
    let div = document.querySelector('#gerar-resultado');
    div.innerHTML = '';
    if (lista.length === 0) {
        alert('Adicione valores antes de finalizar');
        return;
    }
    let listaArrumada = [...lista].sort();
    let media = () => {
        let total = 0;
        for (numero of listaArrumada ) {
            total += Number(numero);
        }
        let valorMedia = total / listaArrumada.length;
        return valorMedia;
    }
    let soma = () => {
        let total = 0;
        for(numero of listaArrumada) {
            total += Number(numero);
        }
        return total;
    }
    
    div.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p><br>`
    div.innerHTML += `<p>O maior valor informado foi ${listaArrumada[listaArrumada.length - 1]}.</p><br>`
    div.innerHTML += `<p>O menor valor informado foi ${listaArrumada[0]}.</p><br>`
    div.innerHTML += `<p>Somando todos os valores, temos ${soma()}</p><br>`
    div.innerHTML += `<p>A media dos valores digitados é ${parseFloat(media())}</p><br>`
}






















