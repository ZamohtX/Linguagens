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

/*
    Exercicio: Longest Path in a Tree

        Dado uma arvore com n vertices compute a maior distancia nessa arvore
*/

const int MAX = 1e4+10;

vector<vector<int>> g(MAX);
int dist[MAX];


void dfs(int v) {
    for (auto w : g[v]) if (dist[w] == -1){
        dist[w] = dist[v] + 1;
        dfs(w);
    }
}

int main(){ _ 

    int n; cin >> n;
    for (int i = 0; i < n; i++){
        int u, v; cin >> u >> v; u--; v--;
        g[u].push_back(v);
        g[v].push_back(u);
    }

    memset(dist, -1, sizeof dist);

    dist[0] = 0;
    dfs(0);

    int pos = -1, distmax = -1;
    for(int i = 0; i < n; i++){
        if (dist[i] > distmax){
            distmax = dist[i];
            pos = i;
        }
    }

    memset(dist, -1, sizeof dist);
    dist[pos];
    dfs(pos);
    int diametro = 0;
    for(int i = 0; i < n; i++) diametro = max(diametro, dist[i]);

    cout << diametro << endl;



    exit(0);
}