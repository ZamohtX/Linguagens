#include <stdio.h>
/*
                    Variaveis e Constantes


    Tipos de Dados:
        |-> char                   8 bits      texto
        |-> int (short)           16 bits      numeros inteiros
        |-> int (long)            32 bits      numeros inteiros
        |-> float                 32 bits      numeros decimais
        |-> double                64 bits      numeros decimais







 */

int main(int argc, char const *argv[]){
   
    // Declaração de Constante
    #define constante "Essa é uma constante"

    printf("%s\n", constante);

    // Declaração de Variaveis
    int idade = 0;
    float altura = 0.0;
    char nome[50] = "";

    printf("Digite a idade: ");
    scanf("%d", &idade);
    printf("Digite a altura: ");
    scanf("%f", &altura);
    printf("Digite o nome: ");
    scanf("%s", &nome);

    printf("Dados informados: \n");
    printf("Idade: %d\n", idade);
    printf("Altura: %.2f\n", altura);
    printf("Nome: %s \n", nome);











    return 0;
}
