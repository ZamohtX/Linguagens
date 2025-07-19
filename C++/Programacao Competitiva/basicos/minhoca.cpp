#include <iostream>
#include <vector>
using namespace std;




int main(){
    int linhas, colunas;
    cin >> linhas >> colunas;

    int matriz[linhas][colunas];
    
    
    for (int i = 0; i < linhas; i++){
        for (int j = 0; j < colunas; j++){
            cin >> matriz[i][j];
        }
    }

    int m = 1;
    vector<int> somaMatriz(m);

    for (int i = 0; i < linhas; i++){
        for (int j = 0; j < colunas; j++){
            // nao importa os numeros do meio
            somaMatriz.resize(m++);
            if ( i != 0 && j != 0 ) continue;
            
            if ( i == 0){
                for (int n = 0; n < colunas; n++){

                }
            }
            
            if (j == 0){
                for (int n = 0; n < linhas; n++){

                }
            }



        }
    }









    return 0;
}