<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    /*              SLUG - URL Amigável

    º É uma forma dos mecanismos de busca entenderem parte de uma url    
*/

    function slug(string $string): string {
        $mapa['a'] = "áéíóúÁÉÍÓÚàÀâêîôûÂÊÎÔÛãõÃÕüÜçÇ.,;:!?-_`~+-=/*%^<>()[]{}@#$&\|¬§°€£¹²³ªº©®";

        $mapa['b'] = "aeiouaeiouaaaeiouaeiouaoaouucc";

        $slug = strtr(utf8_decode($string), utf8_decode($mapa['a']), $mapa['b']);
        $slug = strip_tags(trim($slug));
        $slug = str_replace(" ", '-', $slug);
        return strtolower($slug);
    }





    ?>
</body>
</html>