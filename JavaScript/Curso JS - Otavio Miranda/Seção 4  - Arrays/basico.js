/*
                Arrays


*/



// Declaração
const nomes = ['Thomaz', 'Lilian', 'LG']; //forma literal
const nomes2 = new Array('Thomaz', 'Lilian', 'LG');// construtor

// Alterando um item no array
nomes[2] = 'TOCA';

// Copiando Array
const novoArray = [...nomes]; //usando o operador de resto


//Tamanho Array
const tamArray = nomes.length 

// Removendo Itens do Array
const lg = nomes.pop(); // remove o ultimo elemento do array, alterando a quantidade de indices e retornando o valor excluido.
const thomaz = nomes.shift(); // remove o primeiro item do array, reposicionando todos os outros posteriores e retornando o valor excluido
delete nomes[0]// remove um item do array, mas nao altera a quantidade de indices

// Adicionando Itens no Array
nomes.push("William");// adiciona o valor no final do array
nomes.unshift("Belo");// adiciona o valor no comeco do array, deslocando o resto do array
 
// Manipulando Array
    // Fatia o array no intervalo definido
const parteArray = nomes.slice(0, 2); 
    // Divide a String em um Array, com base no caractere definido
const nomeCompleto = "Thomaz Xavier Araujo Junior";
const divideNomeCompleto = nomeCompleto.split(' ');
    // Junta todos os valores do Array em uma String, com base no caractere definido
const juntaNome = divideNomeCompleto.join(' ');


// Método Splice      1          2       3      4        5           6
const nomeArray = ['Thomaz', 'Arthur', 'Cadu', 'LG', 'Nicholas', 'Vinicius'];
    // nomesArray.splice(indice, delete, elem1, elem2, elem3, elem4);
    
    // Deletendo 
const removidos = nomeArray.splice(4,2) // a partir do indice 4 remove 2 elementos,  Retorna um Array com os elementos removidos
const removidos2 = nomeArray.splice(2, Number.MAX_VALUE ); // remove ate o ultimo elemento
    // Adicionando
const adiciona = nomeArray.splice(3, 0, 'Luiz'); // Adiciona os itens a partir do indice indicado


// Concatenação de Arrays
const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2, [7,8,9], 'Fim'); // Concatenação Comum
const a4 = [...a1, ...a2]; // Concatenação com spread operator



