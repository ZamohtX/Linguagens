//                     Herança em Classes


// Classe Pai
class DispositivoEletronico{
        constructor(nome) {
                // Atributos da classe pai - podem ser herdados pelos filhos
                this.nome = nome;
                this.ligado = false;
        }

        // Metodos da classe classe Pai - estao armazenadas no prototype e podem ser acessadas pelos filhos
        ligar() {
                if (this.ligado) { 
                        console.log(this.nome + ' ja ligado');
                        return;
                };
                this.ligado = true;
        }

        desligar() {
                if (!this.ligado) {
                        console.log(this.nome + ' ja desligado');
                        return;
                }
                this.ligado = false;
        }
}

// Classe Celular FILHA de DispositivoEletronico
            // class ClasseFilha extends(herda de ) Dispositivo Eletronico 
class Celular extends DispositivoEletronico {
                // Classes filhas tem seu proprio construtor
        constructor(nome, cor, modelo) { // Vao ter suas proprias caracteristicas comuns ou incomuns a classe Pai
                
                super(nome); // super(atributoASerHerdado) -> Especifica quais atributos da classe pai que essa classe filha quer usar
                       
                // Atributos Especificos da classe Filha
                this.cor = cor;
                this.modelo = modelo;
        }
}

// Classe Tablet FILHA de DisposrivoEletronico
class Tablet extends DispositivoEletronico {
        constructor(nome, temWifi) { // Vao ter suas proprias caracteristicas comuns ou incomuns a classe Pai
                super(nome);// super(atributoASerHerdado) -> Especifica quais atributos da classe pai que essa classe filha quer usar
                this.temWifi = temWifi; // Atributo especifico da classe
        }

        // Polimorfismo em Classe
                // Altera o metodo da classe Pai apenas nessa classe
        ligar() {
                console.log('Voce alterou o metodo ligar');
        }

        // Filhas podem ter seus proprios metodos privados, disponiveis apenas nelas  
        metodoPrivado() {
                console.log('Metodo privado disponivel apenas na classe tablet')
        }
}

// Criando um novo Objeto atraves da Classe
const s1 = new Celular('Samsung', 'Preto', 'Galaxy S20FE');
s1.ligar(); // Metodo da classe pai DispositivoEletronico
console.log(s1)

// Criando um novo Objeto atraves da Classe
const t1 = new Tablet('ipad', true);
t1.ligar(); // Metodo sobrescrito na classe filha
console.log(t1.ligado);










