                // Model

// Tudo que for referente a base de Dados será tratado pelos models
            
// Importa moongose
const mongoose = require('mongoose');

// Cria um Schema para modelar os dados
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

// Cria o Model que vai modelar os dados, com os parametros nomeDoSchema e SchemaCriado
const HomeModel = mongoose.model("Home", HomeSchema);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exemplo~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     //  Criando Objeto na Base de Dados
// HomeModel.create({
//     titulo: 'Um titulo de testes',
//     descricao: 'Uma descricao de testes'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

//     // Mostra os dados criados na BD até o momento
// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Classe para tratar os dados usando o Mdel criado acima
class Home {

}

module.exports = Home;