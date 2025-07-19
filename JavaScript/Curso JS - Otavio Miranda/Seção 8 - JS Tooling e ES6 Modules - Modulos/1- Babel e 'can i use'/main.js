//                         Babel e "can i use"

// Compatibilidade a navegadores antigos - Não tem suporte ao Ecmascript (versao mais nova do JS)


// Can I use -> é um site que podemos verificar a compatibilidade de determinado recurso do JS com o navegador que quisermos


// Babel - é um compilador JS, ele vai converter o codigo digitado para uma sintaxe antiga suportada por mais navegadores antigos


// instalando

//      passo 1: iniciar o gerenciador de pacote do node: no terminal digita npm init -y 
//      passo 2: instalar o babel: no terminal digita npm install --save-dev @babel/cli @babel/preset-env @babel/core


// Utilizando

const nome = 'Thomaz';
const obj = { nome };
const novoObj = { ...nome};
console.log(novoObj);

    // Convertendo com babel - no terminal coloca npx babel main.js -o bundle.js --presets=@babel/env
    // Com isso foi criado um arquivo com o codigo convertido para JS antigo

    // Deixando a compilação automatica: em package.json, na chave scripts, adicionamos uma nova chave com isso: "babel": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"
    // Pronto, ele vai converter o codigo automaticamente no arquivo bundle

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome =sobrenome;
    }
}