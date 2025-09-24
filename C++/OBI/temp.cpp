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
    vector<vector<int>> grafo(1e4+1);

    int x, y; cin >> x >> y;
    for (int i = 0; i < x; i++){
        for (int j = 0; j < y; j++){
            int gota; cin >> gota;
            grafo[i][j] = gota; 


            if (j == x-1){
                cout << grafo[i][j] << endl;
            } else{
                cout << grafo[i][j] << " ";
            }
    }
        }
           


    }








  