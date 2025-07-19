<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link rel="stylesheet" href="../css/style.css">

</head>
<body>
    
<header>
    <main>
        <h1>Conversor de Moedas</h1>
    <section>
        <p> 
            <?php
            $reais = (float) $_GET['carteira'] ?? 0;
            $dollar = $reais  / 5.58;
            echo "Seus R$". number_format($reais, 2, ",", ".") ." equivalem a U$" . number_format($dollar, 2, ",", ".");
            $padrao = numfmt_create("pt_BR", NumberFormatter::CURRENCY);
            echo "<br>Seus ". numfmt_format_currency($padrao, $reais, "BRL") ." equivalem a " . numfmt_format_currency($padrao, $dollar, "USD");
            
            ?>
        </p>
        <button onclick="javascript:history.go(-1)">&#x2B05; Voltar</button>

    </section>
    
      
    </main>

</body>
</html>