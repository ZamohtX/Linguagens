//                 Funções Recursivas

// São funções que chamam a si mesmas

function recursiva(max) {
    console.log(max);
    if (max >= 10000) return;
    max++;
    recursiva(max);
}

recursiva(-10);