//              Retorno

// Temos funções que retornam e não retornam valores

// O valor retornado sempre vai ser guardado no final da operação  da função
function soma(a, b){
    return a+b; 
}

// no caso de uma função que não tem retorno, vamos ter o valor undefined
let retorno = () => {
    alert("hello world"); 
} 
console.log(retorno); // undefined


function criaMutiplicador(mult){
    return function(n){   
        return n * mult;
    };   
   
}
const duplica = criaMutiplicador(2);
const triplica = criaMutiplicador(3);
const quadriplica = criaMutiplicador(4);
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

 





























