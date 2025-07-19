#include <stdio.h>
//                        Vetores

int main(int argc, char const *argv[])
{
    
    // Declaração de Vetor
    int array[5];
    // Atribuição de valores ao vetor
    array[0] = 10;
    for (int i = 0; i <= 10; i++){
        array[i] = i;
    }
    // Iteração de Vetor
    int soma = 0;
    for (int i = 0; i < 5; i++){
        soma += array[i];
    }




    return 0;
}
