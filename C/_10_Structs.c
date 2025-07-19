#include <stdio.h>
#include <string.h>
#include <locale.h>
#include <stdlib.h>

/*
                            Structs

    Serve para criarmos novos tipos de dados e variaveis com tipos compostos

 */

#define TAM 50
#define TAMANHO 3

// Declarando um novo tipo de dado com Struct
struct tipoPessoa{
    int idade;
    float peso;
    char nome[TAM];
};
// Usando typedef para podermos usar apenas "tipoPessoa" na variavel
typedef struct tipoPessoa tipoPessoa;

int main(){
    setlocale(LC_ALL, "Portuguese");

    // Instanciando uma variavel do tipo criado
    tipoPessoa pes = {0, 0.0, "Teste"};

    // Atribuindo valores aos campos da instancia do novo tipo criado
    pes.idade = 20;
    pes.peso = 103.00;
    strcpy(pes.nome, "Thomaz");

    // Vetores com struct
    tipoPessoa lista[TAMANHO];
    int i;
     for (i=0; i<TAM;i++){
        printf("Insira os dados (%d): \n", i+1 );
        puts("Nome: ");
        scanf("%50[^\n]s", &lista[i].nome);
        getchar();

        printf("Idade: ");
        scanf("%d", &lista[i].idade);
        getchar();

        printf("Peso: ");
        scanf("%f", &lista[i].peso);
        getchar();
    }
    system("clear");

    puts("Seus Dados:\n");
    for (int i = 0; i < TAMANHO; i++){
        printf("-------------Pessoa %d-------------\n",i+1 );
        printf("\tNome: %s\n", lista[i].nome);
        printf("\tIdade: %d\n",lista[i].idade);
        printf("\tPeso: %.2f\n", lista[i].peso);
    }
    printf("--------------------------------\n");









}













