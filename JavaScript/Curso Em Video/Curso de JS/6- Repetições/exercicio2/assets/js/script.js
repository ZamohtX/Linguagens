function tabuada() {
    let num = document.querySelector('#txtn');
    let tab = document.querySelector('#seltab');

    if (num.value.length == 0) {
        alert('Preencha o numero da tabuada');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}