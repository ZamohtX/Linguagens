

function carregar() {
    var msg = document.querySelector('#msg');
    var img = document.querySelector('#imagem');
    var body = document.querySelector('body')

    var data = new Date();
    var horaAtual = data.getHours();

    msg.innerHTML = `Agora são ${horaAtual} horas`;
    

    if (horaAtual >= 0 && horaAtual < 12) {
        img.src = "./assets/img/manha.png";
        body.style.background = 'rgb(207, 136, 6)';
        msg.style.color = 'rgb(207, 136, 6)';
    } else if (horaAtual >=12 && horaAtual < 18) {
        img.src = "./assets/img/tarde.png";
        body.style.background = 'rgb(1, 109, 146)';
        msg.style.color = 'rgb(1, 109, 146)';
    } else {
        img.src = "./assets/img/noite.png";
        body.style.background = 'rgb(17, 24, 27)';
        msg.style.color = 'rgb(17, 24, 27)';
    }
}
