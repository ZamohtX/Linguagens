<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
/*                  Expressões Regulares

    º É uma forma para especificar um intervalo de caracteres que se encaixam na condição escrita na expressão

*/
$cpf = "07156833499";
//  Aceita numeros entre 0 e 9
$limparNumero = preg_replace('/[0-9]/','', $cpf);
    
    
function validarcpf(string $cpf): bool{
    //                            numeros de 1 a 9 que não sejam repetidos
    if (mb_strlen($cpf) != 11 || preg_match('/(\d)\1{10}/', $cpf)){
        return false;
    }
    return true;



}    
    
    
    
    
    
    ?>
</body>
</html>