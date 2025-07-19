<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Manipulação de String</h1>

    <?php 

    //               Manipulação de Strings

    /*
        Formatos de Strings
         |-> Single Quoted -> ' ' Não interpreta o conteudo
         |-> Double Quoted -> " " Interpreta o conteudo
         |-> Heredoc
         |-> Nowdoc
        
        Operador de Concatenação -> ' . '

        Sequencias de Escape 
         |-> \n -> Nova linha
         |-> \t -> Tabulação horizontal
         |-> \\ -> Barra Inverida
         |-> \$ -> Sina Cifrão
         |-> \u{} -> Codepoint Unicode
    
    
    
    
     */
    // Concatenação
    $nome = 'Thomaz';
    $sobrenome = 'Xavier';
    echo  $nome . ' ' . $sobrenome; // Thomaz Xavier

    const PAIS = 'Brasil';
    echo "<br>Me chamo $nome $sobrenome e moro no ". PAIS;
    echo "<br>Estamos no ano de ". date('Y');

    $nom = 'Rodrigo';
    $snome = 'Nogueira';
    echo "<br>$nom \"Minotauro\" $snome";


    // Sintaxe Heredoc -> Interpreta 
    $curso = "PHP";
    $ano = date('Y');
    echo <<< FRASE
        <br>Estou estudando <br>
        $curso em $ano
    FRASE;
    
    // Sintaxe Nowdoc -> Não interpreta
    $curso = "PHP";
    $ano = date("Y");
    echo <<< 'FRASE'
        <br>Estou estudando $curso
        em $ano
    FRASE;
    
    
    
    ?>


</body>
</html>