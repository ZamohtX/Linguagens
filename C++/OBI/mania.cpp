#include <bits/stdc++.h>

using namespace std;

#define _ ios_base::sync_with_stdio(0);cin.tie(0); 
#define endl '\n';

#define f first;
#define s second;

#define dbg(x) cout << #x << " = " << x << endl;

typedef long long ll;

const int INF = 0x3f3f3f;
const ll LINF = 0x3f3f3f3f3f3f3f3fll;



int main(){ _ 
    
    int x, y; cin >> x >> y;
    int grafo[x][y];
    for (int i = 0; i < x; i++){
        for (int j = 0; j < y; j++){
            int gota; cin >> gota;
            grafo[i][j] = gota; 
        }
    }

    int gotas = 0;
    for(int i = 0; i < x; i++){
        for (int j = 0; j < x; j++){
            // olha pra baixo
            if ( (i+1 < x) && (grafo[i][j] + grafo[i+1][j]) % 2 == 0) grafo[i+1][j] += 1; gotas++;
            // olha p pra direita
            if ( (j+1 < y) && (grafo[i][j] + grafo[i][j+1]) % 2 == 0) grafo[i][j+1] += 1; gotas++;

            if (j == x-1){
                cout << grafo[i][j] << endl;
            } else{
                cout << grafo[i][j] << " ";
            }
        }
    }








  
}

