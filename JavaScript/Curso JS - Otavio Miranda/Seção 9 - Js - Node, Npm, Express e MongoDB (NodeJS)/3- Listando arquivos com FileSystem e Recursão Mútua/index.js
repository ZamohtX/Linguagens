//                                File System


// Importando as Bibliotecas
    // Biblioteca FileSystem para manipulação de arquivos e diretorios
const fs = require('fs').promises;
    // Bibilteca Path para adquirir os caminhos dos arquivos
const path = require("path");

//  Função para ler os diretorios
async function readdir(rootDir) { //rootDir é o caminho do diretorio atual que vai ser enviado
        // Definindo um valor padrao caso rootDir não seja enviado
    rootDir = rootDir || path.resolve(__dirname);
        // Abrindo o diretorio com fs.readdir, que vai conter os arquivos daquela pasta
    const files = await fs.readdir(rootDir);
        // Invocando a função walk que vai caminhar pelas pastas e listar os arquivos 
    walk(files, rootDir);
}

// Função para iterar pelas pastas e listar os arquivos
async function walk(files, rootDir) {
        // For para entrar em cada pasta
    for (let file of files){
            // Obtendo o caminho absoluto do arquivo
        const fileFullPath = path.resolve(rootDir, file);
            // Diferenciando se é um diretorio ou um arquivo
        const stats = await fs.stat(fileFullPath);
        
            // Pulando a pasta .git da exibição
        if(/\.git/g.test(fileFullPath)) continue;
            // Pulando a pasta node_modules da exibição
        if(/node_modules/g.test(fileFullPath)) continue;
        
            // Condição para quando for uma pasta, chamar a função reddir que vai entrar na pasta e chamar essa mesma funçao walk para ler dentro da pasta ate que nao tenha nenhuma pasta
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue
        }

            // Especificando os tipos de arquivos que queremos mostrar
        if((!/\.css$/g.test(fileFullPath)) && (!/\.html$/g.test(fileFullPath))) continue;
        
            // Mostrando os arquivos
        console.log(fileFullPath, stats.isDirectory());
    }
} 
// Iniciando o programa com a pasta inicial a ser lida
readdir('C:/Users/ADM/Desktop/Codes/');