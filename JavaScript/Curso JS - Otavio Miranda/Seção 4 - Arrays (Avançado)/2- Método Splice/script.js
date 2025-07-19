//                             Metodo Splice


const nomes = ['Thomaz', 'Lilian', 'Daniel', 'Livia', 'Arthur', 'Joao', 'Gonça'];


///                                                            addElementos
// Parametros: nomes.slice( indice atual, qtElementosRemover, elem1, elem2, elem3)

// Remover Elementos
const removidos = nomes.splice(3, 2); // Remove os elementos especificados e retorna um array com eles

const removidos2 = nomes.splice(-2, Number.MAX_VALUE) // Remove todos os elementos a partir de um ponto

const removidos3 = nomes.splice(-2, 0) // Nao remove nenhum numero, retorna o array vazio

const funcPop = nomes.splice(-1, 1); // Função pop - Apaga o ultimo
const funcShift = nomes.splice(0, 1) // Função shift - Apaga o primeiro;

// Adicionando Elementos
const adiciona = nomes.splice(3, 0, 'William'); // Adiciona os elementos no indice indicado, deslocando os outros para frente

const troca = nomes.splice(2, 1, 'Belo') // Remove o elemento e adiciona o valor no lugar;
const troca2 = nomes.splice(2, 2, 'Belo', 'Maira') // Remove o elemento e adiciona o valor no lugar;

const funcPush = nomes.splice(nomes.length, 0, 'Larissa') // Função push - adiciona no final
const funcUnshift = nomes.slice(0, 0, 'Namaria') // Função unshift - adiciona no inicio






console.log(nomes)