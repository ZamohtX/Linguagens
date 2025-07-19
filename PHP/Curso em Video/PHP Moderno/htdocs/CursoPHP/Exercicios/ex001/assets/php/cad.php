<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link rel="stylesheet" href="../css/style.css">

</head>
<body>
    <main>
        <h1>Resultado Final</h1>
        <?php 
        $numero = $_GET["numero"] ?? 0;
        $antecessor = $numero  - 1;
        $sucessor = $numero + 1;
        echo "<p>O número escolhido foi <strong>$numero</strong><br></p>";
        echo "<p>O seu antecessor é <strong>$antecessor</strong></p>";
        echo "<p>O seu sucessor é <strong>$sucessor</strong></p>";
        ?>
        <button onclick="javascript:history.go(-1)">&#x2B05; Voltar</button>
    </main>

</body>
</html>