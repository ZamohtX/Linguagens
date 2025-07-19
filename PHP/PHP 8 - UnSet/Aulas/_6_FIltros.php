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
                            Filtros

        Utilizamos para validar e filtrar dados
            
*/

    // Filtro para validar email
    function validaEmail(string $email): bool{
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    $emailUsuario = 'thomazxaavier@gmail.com';
    if(validaEmail($emailUsuario)){
        echo "Endereço de email valido";
    } else{
        echo 'Endereço de email invalido';
    }
    
    // Filtro para validar url
    function validaUrl(string $url): bool{
        return filter_var($url, FILTER_VALIDATE_URL);
    }
    if (validaUrl("https://chaatgpt.com/")){
        echo "<br>";
        echo "Url valida";
    } else{
        echo "Url invalida";
    }
    
    
    
    
    
    
    ?>
</body>
</html>