#include <iostream>
using namespace std;

/*              Operadores  

    Tipos de Operadores:
        - Operadores Aritméticos
        - Operadores Relacionais
        - Operadores Lógicos
        - Operadores Bit-a-Bit
        - Operadores de atribuição simplificada
        - Operadores de incremento e decremento



 */


int main(){

    int N;
    cin >> N;

    // Condicional If
    if (N == 0){
        cout << "Zero" << endl; 
    } else {
        if (N > 0) {
            cout << "Positivo" << endl;
        }else{
            cout << "Negativo" << endl;
        }
    }

    // Condicional Switch
    switch (N){
        case 0:
            cout << N << endl;
            break;
        case 1:
            cout << N << endl;
            break;
        case -1:
            cout << N << endl;
            break;
        default:
            cout << "Opção Invalida" << endl;
            break;
    }


    // Condicional While
    int x = 0;
    while(x < 10){
        cout << x << endl;
        x++;
    }  

    do{
        cout << x << endl;
        x++;
    }while(x < 20); 
 

    // Condicional For
        // For tradicional
    for (int i = 0; i < 10; i++){
        cout << i << endl;
    }
    
        // For para array
    int V[3] = {1,2,3};
    for (int x: V) 
        cout << x << endl;    


    return 0;
}