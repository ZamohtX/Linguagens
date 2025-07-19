//              Métodos Uteis para Objetos

const produto = {nome: 'caneca', preco: 3.5};


// Copiar Objetos
                // Pega os valores especificos de dentro do objeto manualmente
const produtoManual = {nome: produto.nome, preco: produto.preco};

                //    Copia do obj   Cria Qualquer coisa    
const outroProduto = {...produto,    material: plastico};
outroProduto.nome = 'caneta';
console.log(produto, outroProduto);

                // Função que copia todos os objetos passados para o primeiro objeto
const outProduto = Object.assign({}, produto, {material: 'porcelana'});


// Object.Keys
                // Mostra todas as chaves do objeto
console.log(Object.keys(produto));

// Object.Value
                // Mostra os valores do objeto
console.log(Object.values(produto));

// Object.Entries
                // Coloca as chaves e valores do objeto em Arrays com cada item
console.log(Object.entries(produto));
for (let [chave, valor] of Object.entries(produto)) {
        console.log(chave, valor)
} 

// Object.Freeze
                // Não vai ser mais possivel alterar esse objeto
Object.freeze(outroProduto);
outroProduto.nome = 'Bolsa';
console.log(outroProduto);


// Object.getOwnPropertyDescriptor
Object.defineProperty(produto, 'nome', {
        writable: false,
        configurable: false,
})
                // mostra as propriedades do atributo do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));



















