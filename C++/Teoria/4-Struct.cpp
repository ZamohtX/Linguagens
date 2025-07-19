#include <iostream>
using namespace std;

// Definindo um novo tipo
typedef int inteiro;
using integer = int;


// Struct Padrão
struct cadastro{
    char nome[50];
    int idade;
    char rua[100];
    int numero;
};

// Struct Anonimo
struct {
    string nome = "Thomaz"; // colocando valor padrão no struct
    int idade;
    string rua;
    int numero;
} cad1, cad2; // instancias unicas desse struct


int main(){
    // Declaração de instancia
    cadastro c;

    // Inicialização
    c = {"Thomaz", 21, "Ilailda Felix", 20}; //  Atribuição 
    cadastro pessoaa = {"Thomaz" , 21, "Ilailda Felix", 20}; // Tradicional
    cadastro pessoa {"Thomaz", 21, "Ilailda Felix", 20}; // Lista de Inicialização
    
    // Acessando valor dentro do struct
    cout << cad1.nome << endl; 


    // Usando typedef
    int x = 10;
    inteiro y = 20;
    integer z = x + y;
    cout << "Soma = " << y << endl;

    return 0;
}