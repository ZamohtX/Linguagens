//                   Tratamento de Erros (Try, Catch, Throw, Finally)
// try {
//     // é executado quando não há erros
// } catch (erro) {
//     // é executado quando há erros
// } finally {
//     // é executado sempre
// }


// try {
//     console.log(naoExiste);
// } catch(err) {
//     console.log('naoExiste não existe.');
// }

// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('x e y precisam ser numeros');
//     }

//     return x + y
// }
// try {
//     console.log(soma(1,'2'));
// } catch(error) {
//     console.log(error)
//     console.log('Alerta de Erro');
// }



function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando Instância de Date.')
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });


}
// '01-01-1970 12:58:12'
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    // console.log(e)
} finally {
    console.log('Tenha um bom dia!');
}