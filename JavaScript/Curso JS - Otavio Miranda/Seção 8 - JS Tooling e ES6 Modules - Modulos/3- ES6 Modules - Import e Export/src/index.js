
// Importação
import { nomeModificado as nomeModificado2, sobrenome, idade, soma, Pessoa } from './modulo1.js';
import * as MeuModulo from './modulo1.js';
import QualquerNome from './modulo1.js';

const nome = 'Joao'

console.log(nomeModificado2, sobrenome, idade);
console.log(soma(5,5));
console.log(nome, nomeModificado2);

// const p1 = new Pessoa('Thomaz', 'Xavier');
// console.log(p1);

console.log(MeuModulo)

const p2 = new QualquerNome('Lilian', 'Xavier')
console.log(p2);