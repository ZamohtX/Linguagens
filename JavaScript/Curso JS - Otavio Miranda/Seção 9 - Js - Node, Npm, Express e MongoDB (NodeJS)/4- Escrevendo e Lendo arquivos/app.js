//                             Escrevendo e Lendo Arquivos

// Importando os Modulos a serem usados
    // Modulo path para manipular caminhos
const path = require('path');

// Caminho do arquivo a ser criado
    // dirname vai pegar o caminho desse arquivo, '..' vai voltar uma pasta, 'teste.txt' é o nome do arquivo 
const caminhoArquivo =  path.resolve(__dirname, 'teste.json');

// Importando a Função que escreve o arquivo
const escreve = require('./modules/escrever');
// Importando a Função que lê o arquivo
const ler = require("./modules/ler");


// Convertendo um objeto em JSON
    // Objeto com os dados a serem transformandos
const pessoas = [
    {nome: 'Thomaz'},
    {nome: 'Lilian'},
    {nome: 'Livia'},
    {nome: 'Daniel'},
    {nome: 'Belle'},
    {nome: 'Ivan'},
];
    // Transforma pessoas em JSON e joga dentro da variavel json
const json = JSON.stringify(pessoas,'', 2);

// Escrevendo o arquivo
    // Mandamos o caminho do arquivo a ser criado e o conteudo do arquivo
escreve(caminhoArquivo, json);


// Lendo o arquivo
    // Função para ler o arquivo
async function leArquivo(caminho) {
        // dados vai conter a função que importamos do modulo ler
    const dados = await ler(caminho);
        // renderizaDados vai mostrar os dados na tela
    renderizaDados(dados);
}
    // Função para mostrar os dados do arquivo na tela, vai ser chamada na função acima
function renderizaDados(dados) {
        // Converte o arquivo JSON de volta para uma lista com objetos
    dados = JSON.parse(dados);
        // Itera pela lista, exibindo o valor do objeto na tela
    dados.forEach(val => console.log(val.nome));
}
    // Inicia a Função com o caminho do arquivo a ser lido
leArquivo(caminhoArquivo);















