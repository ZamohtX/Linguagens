#include <stdio.h>


int main(int argc, char const *argv[])
{
    
    int numeros[4];
    int soma = 0;
    for (int i = 0; i< 4; i++){
        printf("Digite o %dº valor: ", i+1);
        scanf("%d", &numeros[i]);
        getchar();
        soma += numeros[i];
       
    }
    printf("A soma dos valores é igual a %d\n", soma);

}
