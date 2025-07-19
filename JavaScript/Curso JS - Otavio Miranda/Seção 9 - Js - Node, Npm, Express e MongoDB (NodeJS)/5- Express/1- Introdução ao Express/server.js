//                          Introdução ao Express


/*
                    Funções de uma API

            Criar       Ler     Atualizar    Apagar
 CRUD ->    Create,     Read,   Update,      Delete
            post        get     put          delete


                

                |-> Navegador pede para o servidor a pagina 
//       http://meusite.com/sobre <- GET -> Entregue a página /sobre
*/            


// Criando um Servidor
        // Importando o express
const express = require('express');
        // Inicializando o express
const app = express();


// Metodo get -> vai entregar a pagina para a requisição feita pelo navegador ao acessar a pagina
app.get('/', (req, res) => { // '/' é a pagina a ser entregue, req é a requisição feita pelo navegador, res é a resposta que entregaremos
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `);
});
// Metodo post -> vai criar algo ao ser requisitado pelo navegador quando tiver uma requisição do tipo post
app.post('/', (req, res) => {// '/' é a pagina a ser entregue, req é a requisição feita pelo navegador, res é a resposta que entregaremos
    res.send('Recebi o Formulario')
})


// Vai entregar isso na pagina ./contato
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente!')
})


// Cria o servidor local
    // o Primeiro Parametro é a porta do servidor que vamos usar
    // o Segundo Parametro é uma função que será executada assim que abrirmos o servidor, nesse caso, usamos para exibir uma mensagem
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000') // Para atualizar a pagina é preciso parar o serv e executar novamente
    console.log("Servidor executando na porta 3000")
        
});



























