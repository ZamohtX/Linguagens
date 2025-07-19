#include <stdio.h>

/*
                            Entrada de Dados


    Especificadores de formato: scanf()

        |-> d | i       ->      Números inteiros em base decimal
        |-> X           ->      Números inteiros em base hexadecimal
        |-> f           ->      Números em ponto flutuante
        |-> e           ->      Números em notação científica
        |-> c           ->      Caracteres alfanuméricos
        |-> s           ->      Sequência de caracteres alfanuméricos
        |-> [^chars]    ->      Lê todos os dados digitados, exceto os especificados em "chars"

 */

int main(int argc, char const *argv[])
{

    int idade = 0;
    int anoAtual = 0;
    printf("Informe sua idade: ");
    scanf("%d", &idade);
    printf("Informe o ano atual: ");
    scanf("%d", &anoAtual);
    printf("Estamos em %d e você tem %d anos\n", anoAtual, idade);



}