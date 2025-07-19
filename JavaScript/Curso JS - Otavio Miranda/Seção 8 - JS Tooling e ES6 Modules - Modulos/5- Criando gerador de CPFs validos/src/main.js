import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

//Função autoinvocada
(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();