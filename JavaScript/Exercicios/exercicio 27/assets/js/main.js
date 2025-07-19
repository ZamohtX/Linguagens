const form = document.querySelector('.main-form');
const nome = document.querySelector('.nome');
const div = document.querySelector('.div-resultado');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    div.appendChild(p);
    capitalize(nome.value);
    const nomeArray = capitalize(nome.value).split(" ");
    p.innerHTML = `Muito Prazer em te conhecer.<br>
              Seu primeiro nome é ${capitalize(nome.value).split(' ')[0]}<br>
              Seu ultimo nome é ${nomeArray[nomeArray.length - 2]} `

   })

  
  
function capitalize(string) {
  const stringArray =  string.toLowerCase().split(' ')
  let stringCap = '';
  for (let c of stringArray) {
    let flag = true
    for (let x of c) {
      if (x === c[0] && flag === true) {
        stringCap = stringCap + x.toUpperCase();
        flag = false;
      } else {
        stringCap = stringCap+ x.toLowerCase();
      }
    }
    stringCap = stringCap + ' ';
  }

  return stringCap;
}

