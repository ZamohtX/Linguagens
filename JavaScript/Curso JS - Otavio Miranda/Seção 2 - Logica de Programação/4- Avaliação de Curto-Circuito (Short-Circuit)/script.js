//      Operadores Lógicos

/*
            &&        ->        AND   -> Retorna o ultimo valor se tudo for true e retorna o valor false caso tenha
            ||        ->        OR    -> Retorna o valor verdadeiro, caso nao tenha true, retorna o ultimo valor false
*/
/*      False Values


        0
        "" '' ``
        null / undefined
        NaN
*/

//                          &&


//              true                false            true 
console.log('Thomaz Xavier' &&       0          &&  'Lilian');  
//              true                true             true
console.log('Thomaz Xavier' &&       true       &&  'Lilian');
//              true                 true            false
console.log('Thomaz Xavier' &&       true       &&   NaN);

function falaOi () {
    return 'Oi';
}
const vaiExecutar = false;
console.log(vaiExecutar && falaOi());


//                      ||


console.log(0 || false || null || 'Thomaz Xavier' || true);

let corUsuario = null;
let corPadrao = corUsuario || 'preto';
console.log(corPadrao);
corUsuario = 'vermelho';
corPadrao = corUsuario || 'preto';
console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;
console.log(a || b || c || d || e);

















