// Arrays 
  /* */   
//          Define um Array
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);

//          Verifica se algo é um Array
console.log(alunos instanceof Array);

//          Mostra um elemento dentro do Array
console.log(alunos[0]);

//          Substitui um elemento no Array
alunos[0] = 'Thomaz';

console.log(alunos)

//          Adicionando um elemento no Array
alunos[3] = 'Lilian';/*                                    Substitui pelo indice*/
alunos[alunos.length] = 'Livia'; /*                        Adiciona pelo length */
alunos.push('Juliana');/*                                  Adiciona no final */
alunos.unshift('Davysson');/*                              Adiciona no começo*/

console.log(alunos);

//          Removendo um elemento no Array
let removido ;   /*                                        Guarda o valor removido do array*/   
removidoFim = alunos.pop();/*                              Remove o ultimo elemento */  
removidoComeco = alunos.shift();/*                         Remove o primeiro elemento*/   
delete alunos[1];/*                                        Remove um elemento sem alterar os indices, fica um item vazio no lugar*/   

console.log(removidoFim);
console.log(removidoComeco);    
console.log(alunos);

//          Fatiando um Array
console.log(alunos.slice(1,4))


