
#include <bits/stdc++.h>


//                           Guloso 

/*
O guloso é uma tentativa de resolver um problema de otimização de forma rápida e simples, aplicando repetidamente uma regra ou padrão que parece ser a melhor escolha a cada passo. O sucesso do algoritmo depende criticamente se a estrutura do problema garante que essa sequência de escolhas "supostamente" boas de fato leva à melhor solução final possível.

*/



using namespace std;

#define _ ios_base::sync_with_stdio(0);cin.tie(0); 
#define endl '\n';

#define f first;
#define s second;

#define dbg(x) cout << #x << " = " << x << endl;

typedef long long ll;

const int INF = 0x3f3f3f;
const ll LINF = 0x3f3f3f3f3f3f3f3fll;



// Exercicio 2 -> Um restaurante recebe N (N <= 10^5) pedidos de reserva. Cada pedidio coupa o restaurante por um periodo contiguo de I, até r, por exemplo, das 9 as 10 horas. Com restrição de que duas reservas nao podem ter interseção, qual o maior numero de pedidos que podemos aceitar?

bool cmp(pair<int,int> a, pair<int,int> b){
    return a.second < b.second;
}

int main(){ _
    int n; cin >> n;
    vector<pair<int,int>> v;
    for(int i = 0; i < n; i++){
        int a, b; cin >> a >> b;
        v.push_back({a,b});
    }
    sort(v.begin(), v.end(), cmp);
    int ans = 0;
    int fim = -1;
    for(int i = 0; i < n; i++){
        if (v[i].first > fim){
            fim = v[i].second;
            ans++;
        }
    }
    cout << ans << endl;


    exit(0);
}

















