
// Seleciona as Tarefas                                                                         
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');









// Cria li 
function criaLi() {
    const li = document.createElement('li');
    return li
}

// Cria as tarefas na pagina
function criaTarefa(textoInput) {
    const li = criaLi(); // retorna um elemento li
    li.innerText = textoInput; // define o valor do texto de li
    tarefas.appendChild(li); // posiciona o elemento li no html
    limpaInput(); // sempre que cria uma tarefa limpa o input
    criaBotaoApagar(li); // cria o botao de apagar ao lado do li
    salvarTarefas(); // Salva as tarefas na Local Storage
}

// Limpa o input
function limpaInput() {
    inputTarefa.value = ''; // define o valor do input para vazio
    inputTarefa.focus(); // coloca o input em foco
}
// Cria um botao de apagar ao lado da tarefa salva
function criaBotaoApagar(li) {
    li.innerText += ' '; // coloca um espaço entre o texto e o botao apagar
    const botaoApagar = document.createElement('button'); // cria um botao dentro da variavel
    botaoApagar.innerText = 'Apagar'; // define o texto do botao
    // botaoApagar.classList.add('apagar'); // adiciona uma classe no elemento (forma 1)
    botaoApagar.setAttribute('class', 'apagar'); // adiciona uma classe no elemento
    li.appendChild(botaoApagar); // posiciona o botao apagar

}
// Salva as tarefas
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // seleciona todos os li da pagina
    const listaDeTarefas = []; // define o array que vai conter todas as tarefas

    for (let tarefa of liTarefas) { // for para iterar sob a lista de todas as tarefas
        let tarefaTexto = tarefa.innerText; // armazena o valor do texto da tarefa em uma variavel
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // apaga oq nao interessa no texto que veio junto com o texto
        listaDeTarefas.push(tarefaTexto); // adiciona a tarefa especifica do for na lista geral de tarefas para salvar 
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); // transfoma o array em JSON
    localStorage.setItem('tarefas', tarefasJSON); // salva o JSON no local storage

   
}
// adiciona as tarefas salvas na memoria na tela
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); // pega o JSON de tarefas armazenado no local storage
    const listaDeTarefas = JSON.parse(tarefas); // transforma JSON para array

    for (let tarefa of listaDeTarefas) { // itera o array com todas as tarefas salvas
        criaTarefa(tarefa); // cria tarefa por tarefa
    }
}
adicionaTarefasSalvas(); // inicializa as tarefas salvas

















// captura evento dentro do input
inputTarefa.addEventListener('keypress', function(e){ // define o evento como tecla presionada
    if (e.keyCode === 13) { // o key code da tecla enter é 13
        if(!inputTarefa.value) return; // Impede que o usuario mande um valor vazio
        criaTarefa(inputTarefa.value); // cria a tarefa com o valor do input
    }
})

// captura evento dentro do botao 
btnTarefa.addEventListener('click', function() { // define evento como click
    if (!inputTarefa.value) return;// Impede que o usuario mande um valor vazio
    criaTarefa(inputTarefa.value);// cria a tarefa com o valor do input

 
})
// captura qualquer evento do documento
document.addEventListener('click', function(e) { // define evento como click 
    const el = e.target; // coloca o evento 'e' em uma constante
    if (el.classList.contains('apagar')) { // Quando o mouse clicar em um elemento e esse elemento tiver a classe especificada
        el.parentElement.remove(); // apaga o pai, apagando ele mesmo no processo
        salvarTarefas(); // salva a lista de tarefas sempre que um elemento é apagado
    }
})























