#include <iostream>
using namespace std;



int main(){

    int cont = 1;
    while (true){
        int n; cin >> n;
        if (n == 0) break;

        int fila[n];
        for (int i = 0; i < n; i++){
            cin >> fila[i];
        }

        int ganhador;
        for (int i = 0; i < n; i++){
            if (i+1 == fila[i]) ganhador = i+1;
        }

        cout << "Teste " << cont << endl;
        cout << ganhador << endl << endl;
        



    }





    return 0;
}