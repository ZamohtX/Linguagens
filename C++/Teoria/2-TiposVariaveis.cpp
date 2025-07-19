#include <iostream>
#include <math.h>

using namespace std;

/*
                    Tipos de Variaveis



    Declaração:
     tipo_da_variavel nome_da_variavel;


    Tipos Primitivos:
        char        -> Caractere
        int         -> Inteiro
        float       -> Decimal
        double      -> Decimal  (abrange mais numeros)
        void        -> Vazio
        bool        -> Verdadeiro/Falso
        auto        -> Identifica o tipo da variavel


*/

int main(){
    // Inicialização de Variavel
        // Podemos iniciar as variaveis dessas 3 formas
    int x = 5;//    Inicialização por cópia
    int y(5); //    Inicialização direta
    int z{5};//    Inicialização uniforme




    double zero = 0.0;
    double v1 = 5.0 / zero; // infinito positivo
    cout << "v1 = " << v1 << endl;

    double v2 = -5.0 / zero; // infinito negativo
    cout << "V2  = " << v2 << endl;

    double v3 = sqrt(-1);
    cout << "V3 = " << v3 << endl;


    cout << isinf(zero) << endl;
    cout << isinf(v2) << endl;
    cout << isnan(v3) << endl;
    
    
    return 0;
}
