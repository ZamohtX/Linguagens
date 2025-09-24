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

    /**
     Dado um vetor v de elementos ordenados, como encontrar a posicao do primeiro elemento x tal que x >= y? {0,0,1,1,2,3,4,4,6,7,7,7,8,12,15,21,21}
        
        Solução ingenua: percorrer o vetor ate acha um elemento z >= y. Complexidade O(n)   
            |-> essa solução usa totalmente uma propriedade importante do vetor: ordenação.
            |-> se o vetor estiver ordenado, podemos inferir que sabendo o elemento que queremos procurar, podemos simplesmente comparar se tal elemento é maior ou menor que a metade do array e fazermos isso consecutivamente ate achar o elemento que queremos
     */





    // Exercicio 1 -> Pipoca -  Voce é o tecnico de um time C comedores de pipoca em que cada comedor come i pipocas por segundo. Dado um conjunto de N pacotes de pipoca com Pi pipocas em cada e lembrando que cada pacote deve ser comido inteiramente por um unico competidor, diga qual é o tempo minimo que os competiedores levarão para comer todas as pipocas




const int MAX = 1e5+10;

int N, C, T;
int pipocas[MAX];


bool possivel(ll chute) {
    int comp = 1;
    ll resta = T*chute;

    for (int i = 0; i < N; i++){
        if (resta >= pipocas[i]) resta -= pipocas[i];
        else {
            comp++;
            resta = T*chute;
            i--;
        }
        if (comp > C) return false;
    }
    return true;
}


int main(){ _ 


    cin  >> N >> C >> T;
    for (int i = 0; i < N; i++) cin >> pipocas[i];

    int l = 0, r = 1e9+1;
    while (l < r) {
        int  m = (l + r)/2;
        if ( !possivel(m) ) l = m+1;
        else r = m;
    }

    cout << l << endl;




    exit(0);
}