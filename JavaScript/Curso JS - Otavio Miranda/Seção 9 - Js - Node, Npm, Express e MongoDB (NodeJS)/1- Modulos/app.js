

// Importando 
    // Importando Pacotes que ja estão instalados 
const path = require('path');
    // mod1 vai armazenar os dados do objeto exports, utilizamos o require com o caminho relativo 
const mod1 = require('./mod1');    
    // Importando apenas um item
const falaNome1 = require('./mod1').falaNome;    
    // Importação por desestruturação
const {nome, sobrenome, falaNome} = require('./mod1')    
        // Importando Classe por desestruturação
const { Pessoa } = require('./mod1');    


    // Importando Função
const mutiplicacao = require('./mod2');
console.log(mutiplicacao(2,3));
    // Importando Classe
const cachorroGrande = require('./mod3');
const cachorro1 = new cachorroGrande("Tobias");
cachorro1.latir();


// Variaveis
    // __filename é o caminho absoluto ate o arquivo
console.log(__filename);
    // __dirname é o caminho absoluto ate a pasta do arquivo
console.log(__dirname);

// Manipulando Caminhos
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))