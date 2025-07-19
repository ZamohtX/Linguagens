#include <stdio.h>
/*
                                    Saida de Dados

    Especificadores de formato: printf()

        |-> d | i       ->      Números inteiros em base decimal
        |-> X           ->      Números inteiros em base hexadecimal
        |-> f           ->      Números em ponto flutuante
        |-> e           ->      Números em notação científica
        |-> c           ->      Caracteres alfanuméricos
        |-> s           ->      Sequência de caracteres alfanuméricos
        |-> .<num>      ->      Especifica quantos dígitos serão impressos após a vírgula


    Sequências de escape: printf()

        |-> \a          ->      Toca um bipe, alarme padrão do sistema
        |-> \b          ->      Backspace
        |-> \n          ->      Quebra de linha
        |-> \t          ->      TAB horizontal
        |-> \r          ->      Retorna ao inicio da linha
        |-> \0          ->      Caractere nulo
        |-> \u          ->      TAB vertical
        |-> \\          ->      Caractere " \ "
        |-> \'          ->      Caractere " ' "
        |-> \"          ->      Caractere ' " '
        |-> \123        ->      Caractere relacionado ao codigo 123 em octal (ASCII)
        |-> \X23        ->      Caractere relacionado ao codigo 123 em hexadecimal (ASCII)
        |-> %%          ->      Caractere ' % '



 */



int main(){
    
    printf("Oi, tudo bem? Tenho 6 anos e programo.\n");
    printf("Valor inteiro: %d.\n", 10);
    printf("Valor real: %f.\n", 3.141234124);
    printf("Valor real com apenas duas casas: %.2f.\n", 3.124124124124);
    printf("Dado de texto: %c.\n", 'a');
    printf("Dado de texto: %s.\n", "testando");
    return 0;
}
