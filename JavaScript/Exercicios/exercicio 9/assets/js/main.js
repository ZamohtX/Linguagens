const form = document.querySelector(".main-form");
const num = document.querySelector('.numero');
const div = document.querySelector('.div-resultado');

let v = 10;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('oi');
    div.innerHTML = `Tabuada do ${num.value}`;
    while (true) {
        if (v === 0) break;
        let p = document.createElement("p");
        div.appendChild(p);
        p.innerHTML = `${num.value} x ${v} = ${Number(num.value) * v}`
        v = v - 1;
    };


    console.log("io")
})