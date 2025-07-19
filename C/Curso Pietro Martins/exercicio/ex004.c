#include <stdio.h>



int main(int argc, char const *argv[]){
  
    int num1, num2;
    printf("Digite o 1º valor: ");
    scanf("%d", &num1);
    getchar();
    printf("Digite o 2º valor: ");
    scanf("%d", &num2);
    getchar();

    if (num1 < num2){
        printf("%d é o maior número\n", num2);
    } else if (num2 < num1){
        printf("%d é o maior número\n", num1);
    } else{
        printf("Os dois números são iguas\n");
    }







}
