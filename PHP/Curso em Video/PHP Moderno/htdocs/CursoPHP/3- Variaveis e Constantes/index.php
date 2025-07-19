<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Variaveis e Constantes</h1>

    <?php 
        //                  Variaveis e Constantes

        /*
                Regras: 
                1- Variaveis sempre começam com $
                2- O segundo caractere pode ser letra ou _
                3- Não pode começar com caracteres especiais
                4- É Case Sensitive em relação aos nomes
                5- Não podem começar com nomes reservados como 'this'
        

        Variaveis Super Globais
        $_GET -> Contem as informações enviadas atraves do metodo get
        $_POST -> Contem as informações enviadas atraves do metodo post
        $_REQUEST -> Junção das informações armazenadas em $_GET, $_POST e $_COOKIES
        

        */


        // Declaração de Variavel
        $nome = 'Thomaz';
        // Declaração de Constante
        const PAIS = 'Brasil';

        echo "Olá $nome, você mora no ". PAIS;
    
    
    ?>


</body>
</html>