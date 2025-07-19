<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link rel="stylesheet" href="../css/style.css">

</head>
<body>
    <header>
        <h1>Resultado do processamento</h1>
    </header>
    <main>
        <?php 
        /*
                     Variaveis Super Globais

        $_GET -> Contem as informações enviadas atraves do metodo get
        $_POST -> Contem as informações enviadas atraves do metodo post
        $_REQUEST -> Junção das informações armazenadas em $_GET, $_POST e $_COOKIES
        */

        $nome = $_GET["nome"] ?? "Desconhecido";
        $sobrenome = $_GET["sobrenome"] ?? "Desconhecido";
        echo "<p> É um prazer te conhecer $nome $sobrenome"

        ?>
        <p><a href="javascript:history.go(-1)">Voltar para página anterior</a></p>
    </main>

</body>
</html>