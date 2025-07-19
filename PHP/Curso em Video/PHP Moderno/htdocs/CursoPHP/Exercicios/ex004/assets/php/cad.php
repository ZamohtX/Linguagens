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
            $inicio = date("m-d-Y", strtotime("-7 days"));
            $fim = date("m-d-Y");
            $url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial=%27'. $inicio .'%27&@dataFinalCotacao=%27'. $fim .'%27&$top=1&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,dataHoraCotacao';
            $dados = json_decode(file_get_contents($url), true);

            $cotacao = (float) $dados["value"][0]["cotacaoCompra"];
            $real = (float) $_REQUEST['carteira'];
            $dollar = $real / $cotacao;
            
            $padrao = numfmt_create("pt_BR", NumberFormatter::CURRENCY);
            echo "<p>Seus ". numfmt_format_currency($padrao, $real, "BRL") . " equivalem a <strong>". numfmt_format_currency($padrao, $dollar, "USD") ."</strong> </p>"  


            ?>
        </p>
        <button onclick="javascript:history.go(-1)">&#x2B05; Voltar</button>

    </section>
    
      
    </main>

</body>
</html>