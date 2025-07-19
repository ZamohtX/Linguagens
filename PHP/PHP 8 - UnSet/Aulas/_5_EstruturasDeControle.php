<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
            /*      Estruturas de Controle     */
    


    //                      Condicional

    // If e Else
    $hora = 5;
    if ($hora >= 0 && $hora <= 5){
        echo 'É de madrugada';
    } else if ($hora > 5 && $hora < 12){
        echo 'É de manha';
    } else if ($hora >= 12 && $hora < 6){
        echo 'É de tarde';
    } else {
        echo 'É de noite';
    }
    
    //  Operador Ternário
      // condicao   v1   v2  
    echo ($hora ? $hora : 0);

    // Switch
    switch ($hora){
        case $hora >= 5 && $hora < 12:
            echo "bom dia";
            break;
        case $hora >=12 && $hora < 18:
            echo "boa tarde";
            break;
        case $hora >= 18 && $hora < 24:
            echo "boa noite";
            break;
        default:
            echo "boa madrugada";
            break;
    }

    // Match
    $saudacao = match(true){
        $hora  >= 0 and $hora <= 5  => "boa madrugada",
        $hora >= 5 and $hora < 12   => "bom dia",
        $hora >= 12 and $hora < 18  => "boa tarde",
        default                     => "boa noite"
    };

    
    //                      Repetição
    $diasSemana = array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado");
    $meses = ["Janeiro","Fevereiro","Março","Maio","Abril","Junho","Julho","Agosto","Setembro", "Outubro", "Novembro", "Dezembro"];



    // For Each
    foreach($meses as $valor){ // Percorrendo pelos indices
        echo $valor;
    }
    foreach($meses as $chave => $valor){ // Percorrendo com as chaves
        echo "chave -> ".$chave." valor -> ".$valor;
    }
    
    // While
    $num = 0;
    while ($num <= 10){
        echo $num++;
    }

    // For
    for ($i = 0; $i <= 10; $i++){
        echo $i;
    }





    
    ?>
</body>
</html>