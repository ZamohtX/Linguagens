//          Operação Ternaria

//    ?    
//    :

  //                Forma Normal 

const pontuacaoUsuario = 999;
if (pontuacaoUsuario >= 100) {
    console.log('Usuario VIP');          
} else {
    console.log('Usuario Nomal');
}

  //                Com Operação Ternária

const pontUser = 999;
//                          condição    ?   valor true  :   valor false
const nivelUsuario = (pontUser >= 1000) ? 'Usuario VIP' : 'Usuario Normal';
console.log(nivelUsuario)

