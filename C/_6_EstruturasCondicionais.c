#include <stdio.h>

/*

                        Fluxo Condicional if e else

    Operadores relacionais:
        |-> Maior               (>)
        |-> Maior ou igual      (>=)
        |-> Menor               (<)
        |-> Menor ou igual      (<=)
        |-> Igual               (==)
        |-> Diferente           (!=)


    Operadores lógicos:
        |-> Conjunção           (&&)
        |-> Disjunção           (||)
        |-> Inversão            (!)


                        Fluxo Condicional switch e case

    º Util para comparar um unica variavel
    º Compara somente igualdades


                        While

    º Enquanto uma condição for verdadeira, o bloco será repetido infinitamente

                        Do While

    º While com a condição sendo testada no final


                        For
    º Laço finito, usado para iterar ou contar

*/

int main(int argc, char const *argv[])
{

    int condicional = 10;
    // If e else
    if (3 == 3 && 3 != 2)
    {
        printf("verdadeiro\n");
    }
    else
    {
        println("falso");
    }

    // Switch e Case
    switch (condicional)
    {
    case 10:
        printf("A variavel é igual a 10");
        break;
    case 12:
        printf("A variavel é igual a 12");
        break;

    default:
        printf("A variavel não é igual a 10 ou 12");
        break;
    }
    
    // While
    while (condicional < 20){
        printf("%d", condicional);
        condicional++;
    }

    // Do While
    do {
        printf("%d", condicional);
        condicional--;
    } while (condicional > 10);

    // For
    for (int i = 1; i <= 10; i++){
        printf("%d", i);
    }


}
