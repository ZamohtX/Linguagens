//                       Metodos de Instância e Estáticos


/*      
                        Metodos Estaticos 

        Metodos que pertencem a Classe, mas nao as suas instancias.

        Metodos Estaticos não tem acesso as informações das instancias.

        This dentro do Metodo Estatico aponta para a Classe, e não para o Objeto.
*/



// Classe Principal
class ControleRemoto {
        constructor(tv){
                // Atributos Da Instancia
                this.tv = tv;
                this.volume = 0;
        }

                // Metodo de Instancia - São os metodos dos objetos criados a partir da classe
        aumentarVolume() {
                this.volume += 2;
        }
        diminuirVolume() {
                this.volume -= 2;
        }
                // Metodo Estatico - São metodos da Classe que so podem ser invocadas a partir da classe, sem objetos
        static trocaPilha() {
                console.log('Ok, vou trocar.');
                console.log(this.volume);
        }
                        // Metodos Estaticos so podem ser chamados pela classe ( ControleRemoto.soma() )
        static soma(x,y) {
                return x+y;

        }                // This vai apontar para a classe, e não para o objeto
        static thisFunc() {
                return this;
        }
}


// Criando um objeto a partir da classe
const controle1= new ContoleRemoto('LG');
        // Usando um metodo de instancia, ou seja, do objeto
controle1.aumentarVolume();
        // O objeto não possui o metodo estatico, pois ele pertence exclusivamento apenas a Classe
// controle1.trocaPilha();
ControleRemoto.trocaPilha();
console.log(controle1)
        // Random é um metodo estatico da classe Math, assim como soma é de ControleRemoto
console.log(Math.random());
console.log(ControleRemoto.soma(2,4));

























