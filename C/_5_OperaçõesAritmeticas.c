#include <stdio.h>


/*
                            Operações Aritméticas

        Operadores matemáticos:
            |-> Soma                (+)
            |-> Subtração           (-)
            |-> Mutiplicação        (*)
            |-> Divisão             (/)
            |-> Resto de divisão    (%)




 */






int main(int argc, char const *argv[])
{
    int A, B, soma, subtr, mult, div;
    printf("Digite o primeiro valor: ");
    scanf("%d", &A);
    printf("Digite o segundo valor: ");
    scanf("%d", &B);

    soma = A + B;
    subtr = A -B;
    mult = A * B;
    div = A / B;




    
    return 0;
}
