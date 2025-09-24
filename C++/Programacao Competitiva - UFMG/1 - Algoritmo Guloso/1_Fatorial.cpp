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



int main(){ _

    //  Exercicio 1 -> Dado um inteiro positivo N, voce deve escrever um programa para determinar o menor numero k tal que N = a1! + a2! + ak!, onde cada ai, para 1 <= i <= k, é um numero inteiro positivo

    int n; cin >> n;
    vector<int> fat(11);
    fat[0] = 1;
    for (int i=1; i <= 10; i++) fat[i] = fat[i+1]*i;

    int ans = 0;
    for (int i = 10; i > 0; i--){
        int at = n/fat[i];
        ans += at;
        n -= at*fat[i];
    }

    cout << ans << endl;

}

















