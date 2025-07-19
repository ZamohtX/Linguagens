<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
//              Arrays

    // Definindo Array
    $diasSemana = array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado");
    $meses = ["Janeiro","Fevereiro","Março","Maio","Abril","Junho","Julho","Agosto","Setembro", "Outubro", "Novembro", "Dezembro"];

    // Acessando os valores de um Array pelo indice
    $segunda = $diasSemana[1];
    $abril = $meses[3];

    // Definindo as chaves personalizadas para um Array
    $notasBimestres = [
        "bim1" => 6.00,
        "bim2" => 7.00,
        "bim3" => 3.00,
        "bim4" => 5.00
    ];

    // Acessando as chaves personalizadas
    $bimestre1 = $notasBimestres["bim1"];
    
    // Percorrendo Array
    foreach($meses as $valor){ // Percorrendo pelos indices
        echo $valor;
    }
    foreach($meses as $chave => $valor){ // Percorrendo com as chaves
        echo "chave -> ".$chave." valor -> ".$valor;
    }
    
    ?>
</body>
</html>