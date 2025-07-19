// Programa Principal
class ValidaFormulario {
    constructor(){
        // Seleciona o formulario completo
        this.formulario = document.querySelector('.formulario');

        // Inicializa os eventos no contrutor para que o metodo seja chamado assim que o objeto for criado
        this.eventos();
    }

    // Metodo para capturar o evento de enviar formulario
    eventos() {
        this.formulario.addEventListener('submit', (e) =>{ // sempre usar arrow function para nao perder o this
                // Chama o metodo para validar o submit
            this.handleSubmit(e);
        })
    }

    // Metodo que vai enviar o formulario
    handleSubmit(e) {
        // Desativando o envio automatico quando clicar no botao submit
        e.preventDefault();
        // Funções que vao validar os campos necessarios para enviar o formulario
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        // Condição para enviar o formulario somente quando todos as condições forem validas
        if(camposValidos && senhasValidas) {
            alert('Formulario Enviado');
            // Forma manual para enviar o formulario
            this.formulario.submit(); 
        }
    }

    // Metodo que vai verificar uma das condições para enviar o formulario
    senhasSaoValidas() {
        // Flag que vai passar por todo o programa percorrendo as condições que podem alterar seu valor, retornara ao final false ou true
        let valid = true;

        // Selecionando os campos desejados na pagina
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        // Condição 1 - caso os campos sejam diferentes, valid retornara false no fianl
        if (senha.value !== repetirSenha.value) {
            valid = false;
                // Cria os erros que serao exibidos na tela 
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
        }
        // Condição 2 - caso o tamanho da senha seja maior que o permitido, valid retornará false no final
        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
                // Cria os erros que serao exibidos na tela 
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
            this.criaErro(repetirSenha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }

        // Ao final do Metodo, se valid for true, as senhas serao validas.
        return valid;
    }

    // Metodo que vai verificar uma das condições para enviar o formulario
    camposSaoValidos() {
            // Flag que vai passar por todo o programa percorrendo as condições que podem alterar seu valor, retornara ao final false ou true
        let valid = true;
            // Apaga os erros ja exibidos na tela para nao serem acumulados quando apertar em enviar o formulario
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove(); // apaga erro
        }
        //  for para selecionar todos os campos que tenham a classe especificada 
        for (let campo of this.formulario.querySelectorAll('.validar')){
                // Captura o label anterior ao input 
            const label = campo.previousElementSibling.innerText;

            // Condição 1 - Valida se o campo está vazio 
            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco `)
                valid = false;            
            }

            // Seleciona o campo CPF e valida o CPF passado
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }         

            // Seleciona o campo Usuario e valida atraves do metodo;
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }
            // Ao final do Metodo, se valid for true, as senhas serao validas.
        return valid;
    }

    validaUsuario(campo) {
            // Captura o quê for digitado no campo usuario
        const usuario = campo.value;
            // Flag que vai passar por todo o programa percorrendo as condições que podem alterar seu valor, retornara ao final false ou true
        let valid = true;
       
        // Condição 1 - Valida o tamanho do usuario
        if (usuario.length > 12 || usuario.length < 3) {
                // Cria o erro q vai ser mostrado na tela
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }
        // Condição 2 - Valida se o usario contem algum caractere especial
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) { // Expressao que especifica somente letras e numeros
                // Cria o erro q vai ser mostrado na tela
            this.criaErro(campo, 'Nome de usuário precisa conter apena letras e/ou números.');
            valid = false;
        }

            // Ao final do Metodo, se valid for true, as senhas serao validas.
        return valid;
    }


    // Metodo que valida o campo CPF
    validaCPF(campo) {
        // Objeto CPF criado a partir de outra classe em outro arquivo carregado no html
        const cpf = new ValidaCPF(campo.value);

        // Condição 1 - Valida se o cpf é valido 
        if (!cpf.valida()) {
                // Cria o erro q vai ser mostrado na tela
            this.criaErro(campo, 'CPF invalido.');
            return false;
        }

            // Ao final do Metodo, se valid for true, as senhas serao validas.
        return true;
    }



    // Metodo que cria os erros que serão exibidos na tela para o usuario
    criaErro(campo, msg) {
            // Criando uma div
        const div = document.createElement('div');
            // Definindo o valor da div
        div.innerHTML = msg;
            // Adicionando uma classe na div
        div.classList.add('error-text');
            // Inserindo a div na pagina 
        campo.insertAdjacentElement('afterend', div);
    }

}

// Invocando a classe que contem todo o programa
const valida = new ValidaFormulario();