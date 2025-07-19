
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;
    scanf("%d", &n);
    
    // Aloca Memoria
    int *vetor = malloc(n * sizeof(int));
    
    // Verifica
    if (vetor == NULL)
    {
        fprintf(stderr, "Falha na alocação\n");
        return 1;
    }
    
    // Preenche array
    for (int i = 0; i < n; i++)
    {
        vetor[i] = i+2;
        printf("%d ", vetor[i]);
    }
    printf("\n");

    // Libera a memoria e limpa o array
    free(vetor);
    
    // Aloca outro espaço de memoria pra o mesmo vetor
    vetor = malloc(n+1 * sizeof(int));
    
    for (int i = 0; i < n; i++)
    {
        vetor[i] = i+1;
        printf("%d ", vetor[i]);
    }

    return 0;
}