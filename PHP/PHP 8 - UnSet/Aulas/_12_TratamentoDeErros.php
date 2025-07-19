<?php
//              Tratamento de Erros


// Usando a Classe Exception
use Exception;


function resumirTexto(string $texto, int $numLinhas): string {
    if (mb_strlen($texto) < $numLinhas) {
        // Criando uma nova Exceção
        throw new Exception("O texto precisa ter mais linhas mais de {$numLinhas} linhas");
    }
    return $texto;
}

// Try para tentar executar o codigo
try {
    resumirTexto("abcd", 5);
// Catch para capturar qualquer exceção que acontecer durante a execução do codigo
} catch (Exception $e) { // os dados da exeção serão armazenados na variavel do catch $e
    echo $e->getMessage(); // Atributo para pegar somente a mensagem da exceção
// Finally sempre será executado, independente de ter ou não exceçõs
} finally {
    echo "Eu sou executado sempre :)";
}


?>