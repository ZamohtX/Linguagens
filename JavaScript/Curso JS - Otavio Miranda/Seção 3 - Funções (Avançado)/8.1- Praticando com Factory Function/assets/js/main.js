function criaCalculadora() {
    return {
        // Atributos
        display: document.querySelector('.display'),
        



        // Metodos
        inicia() {
           this.cliqueBotoes();
           this.pressionaEnter();
        },

        cliqueBotoes() {
            // this -> calculadora
            // document.addEventListener('click', (e) => {
            // this passa a ser document
            document.addEventListener('click', (e) => {
                // Usando arrow function, o this nunca muda
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                };

                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay()
                };
                if (el.classList.contains('btn-dell')) {
                    this.apagaUm();
                };
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }) // Usando .bind(this) fala pra funcao nao usar document como this
        },
        
        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {//         slice(tamanho total(0), menos 1(-1))
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta)
                if (!conta) {
                    alert('Conta invalida');
                    return
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta Invalida');
                return;
            }
        },

        pressionaEnter() {
          this.display.addEventListener('keyup',(e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
          })
        },


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();