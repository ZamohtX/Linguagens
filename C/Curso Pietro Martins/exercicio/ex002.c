#include <stdio.h>



int main(int argc, char const *argv[])
{
    float salario, percentual;
    printf("Informe o salario do funcionario: ");
    scanf("%f", &salario);
    getchar();
   

    printf("Informe o percentual de aumento do salário: ");
    scanf("%f", &percentual);
    getchar();
   
    

    float novoSalario = salario + (salario * (percentual / 100));
    printf("O salario final do funcionario é de R$%.2f\n", novoSalario);





}
