#include <stdio.h>
// nesse arquivo estarão guardadas as declarações de funcoes 
#include "_12_FuncaoMain.h"

// desenvolevendo a função que foi declarada no arquivo .h
float soma(float a, float b){
    return a + b;
}




// Main é o programa principal
int main(int argc, char const *argv[])  
    // argc e argv[] guardam tudo que for digitado no momento da execução do executavel via terminal
{
    if (argc > 1){
        printf("Foram inseridos %d argumentos: ", argc);
        for (int i=0; i < argc; i++){
            printf("%s\n", argv[i]);
        }
    } else{
        printf("Não foram inseridos argumentos no programa.\n");
    }
    


   
}
