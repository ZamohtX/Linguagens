// Mais sobre Strings



let umaString = 'Um texto';             /* Sao Iteraveis */


    // Iterando a String pelo Indice    
console.log(umaString[3]);                            
console.log(umaString.charAt(3));

    // Concatenação;
console.log(umaString.concat(' em', ' um',' lindo dia'));
console.log(umaString + 'em' + 'um' + 'lindo dia');
console.log(`${umaString} em um lindo dia`);

    // Procurar uma palavra dentro da String
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('um', 2));
console.log(umaString.lastIndexOf('m'));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/));

    // Substituir dentro da String
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.replace(/Um/, 'Outro'));
let palavra = 'O rato roeu a roupa do rei de roma.';
console.log(palavra.replace(/r/, '#'));
console.log(palavra.replace(/r/g, '#'));

    // Tamanho da String
console.log(umaString.length);

    // Mostrar determinada parte da String atraves do Index
console.log(palavra.slice(2, 5));
console.log(palavra.slice(2, 6));
console.log(palavra.slice(-3));
console.log(palavra.slice(-5, - 1));
console.log(palavra.substring(palavra.length - 5, palavra.length - 1));

    // Fatiamento
console.log(palavra.split(' '));
console.log(palavra.split(' ',));

    // Maiusculas e Minusculas
console.log(palavra.toUpperCase());
console.log(palavra.toLowerCase());




