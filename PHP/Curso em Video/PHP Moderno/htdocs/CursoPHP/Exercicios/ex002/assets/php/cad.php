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
    <main>
        <h1>Numero Aleatório</h1>
    <section>
        <form action="cad.php" method="get">
            <p> Gerando um número aleatorio entre 0 e 100</p>
            <?php
                $min = 0;
                $max = 100;
                
                $num = rand($min, $max);
                echo "<p>O número gerado foi $num</p>"
            
            ?>
            <input type="submit" value="Gerar">

        </form>
    </section>
    
      
    </main>

</body>
</html>