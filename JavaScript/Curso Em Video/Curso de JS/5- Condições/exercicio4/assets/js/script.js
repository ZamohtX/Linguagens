function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var anoNascimento = document.querySelector('#textano');
    var resultado = document.querySelector('#resultado');

    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > anoAtual) {
        window.alert('Verifique dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = anoAtual - Number(anoNascimento.value);

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        var genero = '';
        if (fsex[0].checked) {

            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './assets/img/menino.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', './assets/img/jovem-homem.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', './assets/img/adulto.png')   
            } else {
                img.setAttribute('src', './assets/img/idoso.png')

            }


        }   else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './assets/img/menina.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', './assets/img/jovem-mulher.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', './assets/img/adulta.png')   
            } else {
                img.setAttribute('src', './assets/img/idosa.png')

            }

        };
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        resultado.appendChild(img)

    }

}