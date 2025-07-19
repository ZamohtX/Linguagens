//                            Escrever Arquivos

// Importando os Modulos a serem usados
    // Modulo fs para manipulação de arquivos
const fs = require('fs').promises;

// Função que escreve o arquivo, vai ser importada em app.js
module.exports = (caminho, dados) => {
    // Escrevendo o arquivo
            // caminho é onde o arquivo vai ser criado
            // dados é o conteudo dentro do arquivo
            // {flag: 'w'} vai excluir tudo dentro do arquivo e escrever o conteudo especificado
            // {flag: 'a'} vai preservar o conteudo e dar um append dentro do arquivo com o conteudo especificado, não vai quebrar a linha
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf-8'});
};


























