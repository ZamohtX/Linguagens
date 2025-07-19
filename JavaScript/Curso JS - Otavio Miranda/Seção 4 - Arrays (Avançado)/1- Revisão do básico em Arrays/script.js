//                   Arrays

// Criação
const nomes = ['Maira', 'Belo', 'Davysson', 'June', 'Nicholas', 'Clau']; // Construtor Literal
const nomes2 = new Array('Maira', 'Belo', 'Davysson', 'June', 'Nicholas', 'Clau') // Construtor


// Tamanho do Array
console.log(nomes.length);

// Manipulação de Array
        // Mudando um dado dentro do array      
nomes[2] = 'Thomaz' 

        // Fatiamento de Array
let novo = nomes.slice(1, 3); // Retorna um array com os elementos fatiados (comeco, final)
novo = nomes.slice(1, -1); // Conseguimos especificar os elementos de tras pra frente 

        // Convertendo String em Array  ||  Array em String
const nome = 'Thomaz Xavier Araujo Junior';
const nomeSeparado = nome.split(' '); // Separa a string pelo elemento selecionado e retorna em um Array
const nomeJunto = nomeSeparado.join(' '); // Junta os elementos do Array em uma String, separados pelo parametro especificado
            
        // Deletando elementos do Array    
delete nomes[2]; // Deleta um dado dentro do array, deixando um item vazio no lugar
const removidoFinal = nomes.pop(); // Remove o ultimo elemento do array e retorna para uma variavel
const removidoInicio = nomes.shift(); // Remove o primiro elemento do array e retorna para uma variavel, deslocando os indices
            
        // Adicionando elementos no Array
nomes.push('Will'); // Adiciona um item no final do array;
nomes.unshift('Wenndel'); // Adiciona um item no começo do array, deslocando os indices

// Copia de Arrays
const novoErrado = nomes; // forma errada, pois apontam para o mesmo local na memoria
const novoCerto = [...nomes]; // Forma certa, usando o spread operator


// Transforma String em Array
let cpf = '071.568.334-99';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);
console.log(cpfArray);



















