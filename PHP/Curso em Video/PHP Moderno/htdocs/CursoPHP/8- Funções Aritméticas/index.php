<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Funções Aritmeticas</h1>

    <?php 
    //              Funções Aritméticas

    // Função abs -> Retorna o valor positivo do número
    $n = abs(-500);
    print("A resposta é $n");
    // Função base_convert -> Converte numeros de bases decimais
    base_convert(254, 10, 8); // base_converte(num, baseAtual, baseConvertida);
    // Funções de Arredondamento
    ceil(8.4); // Arredonda para cima
    floor(8.4); // Arredonda para baixo
    round(8.4); // Arredonda normalmente
    // Função Raiz Quadrada
    sqrt(25); // Retorna a raiz do número
    // Função Hipotenusa
    hypot(3,4);// hypot(cateto1, cateto2)
    
    // Função Divisão Inteira
    intdiv(5,2); 
    // Função de Minimo e Maximo
    min(5,2,7,4,5,6,4); // Retorna o menor valor
    max(5,2,17,87,4,1); // Retorna o maior valor
    // Função PI
    const pi = [pi(), /*ou*/ M_PI];   
    // Função Potencia
    pow(2,2); // pow(num, potencia)
    // Geração de Numeros Aleatorio
    rand(0, 100); // rand(min, max) -> 1951 - Linear Congrential Gerator
    mt_rand(0,100); // mt_rand(min,max) -> 1997 - Marsenne Twister
    random_int(0,10); // random_int(min, max) -> Criptografadamente Seguro (Usar com senhas)



    ?>

</body>
</html>