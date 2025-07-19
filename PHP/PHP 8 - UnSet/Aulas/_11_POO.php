<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php   //          Programação Orientada a Objetos
/*
        Classes:
            |-> São abstrações do mundo real
            |-> Ficam em um arquivo especifico para classes para serem importadas no projeto depois
            |-> Instancia Anonima
                |-> É uma forma de instanciar anonimamente uma classe
            |-> This
                |-> Se refere a instancia da classe
            |-> Self
                |-> Se refere a propria classe

        Visibilidade:
            |-> Atributos e Métodos tem visibilidade definida
            |-> Public
                |-> Podem ser acessados fora da classe
            |-> Private
                |-> Podem ser acessados somente dentro da classe
            |-> Protected
                |-> Podem ser acessadas pelas filhas da classe

        Atributos:
            |-> São as caracteristicas da classe (variaveis / constantes)
        
        Métodos:
            |-> São as ações de cada classe (funções)
            |-> Encadeamento
                |-> É quando um método usa outros métodos e esses outros métodos podem ou não usar outros métodos, métodos que chamam métodos
            |-> Métodos Mágicos
                |-> São métodos predefinidos no php que são automaticamente executados no momento da instanciação, assim como os construtores
            |-> Métodos Estaticos
                |-> São métodos que não precisam de instancia para serem usados

        Construtores:
            |-> São Funçõs que inicializam a classe e definem valores para seus atributos




*/
    // Definindo Classe
    class Mensagem{
        
        // Definindo Atributo
        private $texto;
        public $css;

        // Definindo Construtor
        public function __construct(string $texto, string $css){
            $this->texto = $texto;
            $this->css = $css;
        }

        // Definindo Método
        public function renderizar():string {
            return "<div class='{$this->css}'>{$this->texto}</div>";
        }
        
        private function filtrar(string $mensagem): string{
            return filter_var($mensagem, FILTER_DEFAULT);
        }
        
        // Encadeamento de Métodos
        public function sucesso(string $mensagem): Mensagem{
            $this->css = 'alert alerta-success';
            $this->texto = $this->filtrar($mensagem);
            return $this;
        }

        // Métodos Mágicos
        public function __toString(){
            return $this->renderizar();
        }

        // Métodos Estáticos
        public static function validarCPF(string $cpf): bool{
            // Usando método estatico dentro da classe
            $cpf = self::limparNúmero($cpf);
            echo "cpf validado";
            return true;
        }

        public static function limparNúmero(string $num): string{
            return $num;
        }
    }

    // Instânciando Classe
    $msg = new Mensagem("mensagem", "css-loader");
    
    // Acessando Atributos
    echo $msg->css = "atributo acessado por fora da classe";

    // Encadeando Métodos
    echo $msg->sucesso('Mensagem de Sucesso')->renderizar();

    // Instanciando Anonimamente
    echo (new Mensagem("mensagem", "css"))->sucesso("Mensagem de Sucesso")->renderizar();

    // Usando Método Mágico
    echo (new Mensagem("mensagem", "css"))->sucesso("não precisa mais do renderizar");

   // Chamando Método Estatico
   Mensagem::validarCPF("07156833499");
    
    
    ?>
</body>
</html>