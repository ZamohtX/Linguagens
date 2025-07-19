function mostraHora(zerar=false) {
    if (zerar === true) {
        let data = new Date(2004, 3, 12, 0, 0, 0, 0);
        return data
        
    } else {
        let data = new Date(2004, 3, 12, 0, 0, incrementaSeg, 0);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false
        })
    }
}




const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let incrementaSeg = 0;
let numeroCliquesIniciar = 0;
let continuaIncrementaSeg = true;
let confirmIncrement = true;
let querPausar = false;
let varIniciar = false;



// Programa Principal
const timer = setInterval(function () {
    if (varIniciar) {
        if (!querPausar) {
            mostraHoraAgora = mostraHora()
            if (continuaIncrementaSeg) {
                 incrementaSeg++;
                 continuaIncrementaSeg = true;
             }
        }
        relogio.innerHTML = mostraHoraAgora;
    }
},1000)


iniciar.addEventListener('click', function() {
    varIniciar = true;
    querPausar = false;
    continuaIncrementaSeg = true
   
})

pausar.addEventListener('click', function() {
    continuaIncrementaSeg = false;
    confirmIncrement = false;
    querPausar = true;
    varIniciar = false;
})




zerar.addEventListener('click', function() {
    incrementaSeg = 0
    zerarHora = true
})