#include <stdio.h>


int main()
{/*
                Matrizes


    São vetores multidimensionais

*/

// Declaração de Matriz
int mat[3][3] = {{0,1,2},
                {3,4,5},
                {6,7,8}};

// iteração sob a matriz
for (int i = 0; i < 3; i++){
    for (int j = 0; j < 3; j++){
        printf("%d", mat[i][j]);
    }
    printf("\n");
}


}
