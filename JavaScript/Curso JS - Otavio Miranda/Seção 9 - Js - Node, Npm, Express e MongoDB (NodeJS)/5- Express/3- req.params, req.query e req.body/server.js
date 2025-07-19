//                              req.params, req.query e req.body



const express = require('express');
const app = express();

// Tratando o body da requisição para nao receber undefined em req.body
app.use(express.urlencoded({extended: true}))


/*
http://facebook.com/profiles/thomazxavier -> thomazxavier é um parametro da url
http://facebook.com/profiles/anuncio1?campanha=googleads&nome_campanha=qualquer=nome -> ?campanha=googleads é uma query string
                             param      chave = valor   &         chave = valor


 */


app.get('/', (req, res) => { 
        // Metodo POST no form para capturar o valor digitado no imput
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `);
});

// Defindo os parametros:
    // colocar ? depois do parametro para definir que é opcional
app.get("/testes/:idUsuarios?/:outroParametro?", (req, res) => {
        // req.params vai conter os parametros da url
    console.log(req.params);
        // req.query vai conter um objeto com as query strings digitadas na url, que vao conter as chaves e os valores das chaves
    console.log(req.query);
        // Mostrando na tela o nome enviado atraves de uma query string digitado na url
    res.send(req.query.nome);
})


// Metodo post
app.post('/', (req, res) => {
        // req.body vai conter tudo dentro do body html, ele vai pegar o valor e guardar dentro de req oq for digitado no imput enviado
    console.log(req.body);
        // .nome é o name que colocamos no input, especificamos que vamos pegar apenas o valor digitado nesse imput
    res.send(`O que voce me enviou foi: ${req.body.nome}`)
})



app.listen(3000, () => {
    console.log('Acessar http://localhost:3000') 
    console.log("Servidor executando na porta 3000")
        
});



























