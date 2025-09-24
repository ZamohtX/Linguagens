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

    // Exercicio 3 -> Bruninho tem que entrar em um corredor, percorrer algumas salas e depois sair do corredor. Ele pode entrar apenas uma vez e passar por cada sala apenas uma vez. Ao passor por uma sala o ele ganhar um certo numero de vidas (que pode ser negativo). O objetivo é passar pelo corredor coletando a maior quantidade possivel de vidas.

    // Se o vetor for todo de numeros positivos a resposta sera a soma de todos os elementos
    // Se o vetor for todo de numeros negativos a resposta sera a o maior dos elementos


    // Kadane
    int n; cin >> n;
    vector<int> v;
    for (int i = 0; i < n; i++){
        int a; cin >> a; v.push_back(a);
    }

    int ans = -INF, soma_ant = -INF;
    for (int i = 0; i < n; i++){
        if (soma_ant < 0){
            soma_ant = v[i];
            ans = max(soma_ant, ans);
        } else {
            soma_ant += v[i];
        }
        ans = max(soma_ant, ans);
    }


    cout << ans << endl;






    exit(0);
}