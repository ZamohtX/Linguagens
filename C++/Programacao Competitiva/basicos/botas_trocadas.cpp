 // Biblioteca padrçaque ja inclui todos os includes  importantes
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
    
    int x;
    cin >> x;

    vector<pair<int,int>> botas(61, {0,0});


    for (int i = 0; i < x; i++){
        int tam; cin >> tam;
        char pe; cin >> pe;

        if (pe == 'E') botas[tam].first++;
        else botas[tam].second++;
    }

    int resposta = 0;
    for (int i=0; i < botas.size(); i++){
        resposta += min(botas[i].first, botas[i].second);
    }

    cout << resposta << endl;
}


















