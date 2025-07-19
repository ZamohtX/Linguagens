//          Fetch API e Axios (JSON)

    // Fetch busca os dados do arquivo 
fetch('./pessoas.json')
        // Fetch retornou uma promise que capturamos em then com resposta e precisamos converter para JSON com .json()
    .then(resposta => resposta.json())
        // resposta.json retorna uma nova promise, que usamos para passar para a função que manipula os dados
    .then(json => carregaElementosNaPagina(json));


// Axios 

/* A melhor alternativa ao XMLHttpsRequest,
Pra usar precisa carregar esse script no body: 

 <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */
axios('./pessoas.json')
    .then(resposta=> carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');
        
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);


       table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}

