<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
//                          Funções

    /*
        As funções normalmente ficam em um arquivo separado chamado "helper" que são invocadas em arquivos separados
    

    */
    // Definindo uma função
        //   nome     parametros    retorno
    function soma(int $n1, int $n2): int{
        return $n1 + $n2;
    }
    // Invocando uma função
    echo soma(1,2);
  
    // Só aceitando os tipos predefinidos nos parametros da função
    declare(strict_types = 1);
    





    /*
                        Funções do PHP

    https://www.php.net/manual/pt_BR/indexes.functions.php               

*/
    //                        Sistema

    // Define codificação pra utf8
    utf8_decode($string);
    // Define Fuso Horário Padrão
    date_default_timezone_set('America/Sao_Paulo');

    // Função Date()
    $data = date('d/m/Y H:i:s');
    $hora = date('H');
    

    //                  Manipulação de Strings

    $texto = ' Thomaz Xavier Araujo Junior  ';

    // Verifica se a variavel está vazia
    $estaVazio = empty($texto);

    // Tirar Espaços das Laterais
    $texto = trim($texto);

    // Tamanho da String
    $len = mb_strlen($texto);   
    
    // Cortar String
    $nome = mb_substr($texto, 0, 5);

    // Coloca a string pra Minusculas
    $texto = strtolower($texto);
    
    // Contém uma palavra dentro da string
    $contem = str_contains($texto, "Thomaz");

    // Substitui conteudo dentro da string
    $texto = str_replace(" ", '-', $texto);
    $textoNovo = preg_replace("/[^a-z]/", 'a', $texto);

    // Verifica se a string começa com algo especifico
    $comecaComTh = str_starts_with($texto, "Th");

    // Ultima Ocorrência
    $ultimaOcorrencia = mb_strrpos($texto, "a");

    // Concatenar
    $concatenado = $nome.$texto ;

    // Limpar Tags
    $limpaTag = strip_tags($texto);

    // String Data para Segundos
    $agora = strtotime(date('Y-m-d H:i:s'));

    //                  Números
    $n1 = 8.23431;
    
    // Arredondar
    $arrredondar = round($n1);

  
    
    ?>
</body>
</html>