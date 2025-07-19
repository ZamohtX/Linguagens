<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //             Variaveis

    /*
            Tipos de Dados:
                |-> String -> "string"
                |-> Int -> 5
                |-> Float -> 1.7515
                |-> Boolean -> true
                |-> Null -> null



    
*/
    // Declarando Variavel
    $string = 'textoqualquer';
    
    // Checando Tipo da Variavel
    var_dump($string);
    
    // Declarando Constante
        //     nome           valor
    define('CONSTANTE', 'VALORDACONSTANTE'); // definida na memoria em tempo de execução
    const CONSTANTE2 = 'VALORDACONSTANTE'; // definida na memoria em tempo de compilação

    // Verificando valor da constante;
    constant('CONSTANTE2');
    



    
    
    ?>
</body>
</html>