#include <stdio.h>


int main(int argc, char const *argv[])
{
    int segTotal, horas, minutos, segundos; 

    printf("Informe os segundos: ");
    scanf("%d", &segTotal);
    getchar();

    horas = segTotal / 3600;
    segTotal = segTotal  % 3600;
    minutos = segTotal / 60;
    segundos = segTotal % 60;

    printf("Horas: %d\n", horas);
    printf("Minutos: %d\n", minutos);
    printf("Segundos: %d\n", segundos);





}
