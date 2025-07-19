//              Object.defineProperty() e Objetct.defineProperties()


function Produto(nome, preco, estoque) {
       
        Object.defineProperty(this, 'estoque', {
                enumerable: true, // mostra chave
                value: estoque, // o valor
                writable: false, // pode altera o valor
                configurable: false, // pode reconfigurar ou apagar a chave
        });

        Object.defineProperties(this, {
                nome: {
                        enumerable: true,
                        value: nome,
                        writable: false,
                        configurable: false,
                },
                preco: {
                        enumerable: true,
                        value: preco,
                        writable: true,
                        configurable: false,
                }
        })
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));
for (let chave in p1) console.log(chave);









