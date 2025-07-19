        // Ativando recursos novos do JS em navegadores antigos
    



function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sou a promessa');
            resolve();
        }, 2000)
    }) ;
}

export default async function () {
    await promise();
    console.log('Terminou');
}