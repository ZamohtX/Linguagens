<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    /*
                Informaçções do Servidor e Ambiente


        º As informações do servidor estão armazenadas nas variaveis super globais:
            |-> $_SERVER -> 
    */
    

    function localhost():bool{
        $servidor = filter_input(INPUT_SERVER, "SERVER_NAME");
        return ($servidor == "localhost"? true:false);
    }
    var_dump(localhost());




    
    ?>
</body>
</html>