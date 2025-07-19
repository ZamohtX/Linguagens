#include <stdio.h>
#include <string.h>
#include <locale.h>

/*
                            Strings

    Bibliotecas a serem incluidas:
        |-> string.h    -> Vai permitir trabalhar com strings de uma melhor forma
        |-> locale.h    -> Permite a utilização de acentos



    º Um vetor de char sempre vai salvar a quantidade especificada -1, 
    que vai ser acomodado o /0, que é a flag para a finalização da string
*/
// Constante com o tamanho do char
#define N 20
int main(int argc, char const *argv[])
{

// Definindo String
char palavra[10]; 

//                Saída de Dados

// Função fflush(): -> Sempre usado apos uma entrada de dados
fflush(stdin); 
// Função scanf():
//      Sintaxe Convencional: -> Não permite espaços
scanf("%s", palavra);// scanf("%s", <str>)
//      Sintaxe Aprimorada: -> Permite espaços
scanf("%10[^\n]s", palavra); // scanf("%<tam.-1>[^\n]s", <str>)
// Função gets():
gets(palavra); // gets(<string>)
// Função fgets():
fgets(palavra, 10, stdin); // fgets(<string>, <tamanho>, stdin)
// Função puts():
puts(palavra); // puts(<string>)

/*              
    Funções para Manipulação de Strings:
        |-> strcpy
            º Atribui o conteudo de uma variavel string para outra
            º Sintaxe:
                strcpy(<destino>,<origem>)

        |-> strcat
            º Concatena uma string na outra
            º Sintaxe:
                strcat(<destino>,<origem>)

        |-> strlen
            º Retorna o tamanho da string
            º Sintaxe:
                strlen(<string>)

        |-> strcmp
            º Compara se uma string é igual a outra, retornando 0 em caso verdadeiro
            º Sintaxe:
                strcmp(<string1>,<string2>)
 */


//  Definindo localização
setlocale(LC_ALL, "Portuguese");

// Atribuir valor de uma string para outra
char origem[N] = {"Hello, World!!"};
char destino[N];
strcpy(destino, origem);

// Concatena uma string na outra
char s1[N] = {"Lógica de"};
char s2[N]= {" Programação!"};
strcat(s1, s2); // s1 possui o resultado da concatenação

// Tamanho da string
int tamanhoString = strlen("Thomaz Xavier Araujo Junior");

// Comparar strings
char senhaBanco[N] = {"ABCDEFG"};
char senhaDigitada[N] = {"ABCDEFG"};
if (strcmp(senhaBanco, senhaDigitada) == 0){
    printf("As senhas são iguais\n");
} else{
    printf("As senhas são diferentes\n");
}







}
