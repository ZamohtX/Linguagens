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
    Motivação: 
        Para resolver problemas, é conveniente abstrair e extrair apenas as parrtes importantes
        Com frequencia é possivel pensar em um problema como elementos e suas relações


        Cada ponto de um grafo é chamado de Vértice, e a relação entre eles é chamado de Arestas


    Definição:
        Um grafo não direcionado G é um par de conjuntos G = (V, E), sendo V um conjunto de vertices (pontos) e E um conjunto de arestas (linhas). As arestas serão
        representadas como um conjunto de 2 elementos.

    Caminho:
        Um caminho P de x0 a xk é um grafo nao vazio da forma V = {x0, x1 .. xk} e E = {{x0,x1}, {x1,x2}, ... , {xk-1, xk}} em que todos os xi são distintos.
        O comprimento de um caminho é definido como o numero de arestas em E

    Ciclo:
        Sendo P um caminho de x0 para xk de comprimento maior ou igual a 2, um ciclo pode ser definido com P + {xk, x0} (adiciona uma aresta fechando o ciclo)

    Conectividade
        Um grafo G é dito conexo se para todo par de vertices v, w pertence a G, existe um G de v para w e desconexo caso o contrario
        Um subgrafo conexo maximal de um grafo G é chamado de componente conexo


    Representações de Grafos
        |-> Lista de adjacencia:
            é natural guardar, para cada vertice, os vertices que podemos atingir por meio de uma aresta. A essse vertices damos o nome
            de vizinhos e definimos o numero de vizinho de um vertice com o seu grau

            Podemos usar um vector<vector<int>> para guardar os vizinhos de cada vertice. Desta maneira podemos representar um grafo em O'(|V| + |E|) de memoria


    DFS
        É util saber, para um vertice v pertencente a G para vertices w pertencentes a G existe um caminho de v para w.
        Dessa necessidade surge o nosso primeiro algoritmo para percorrer um grado, a Deapth-first Search (DFS), ou busca em profundidade

        A ideia é começar a busca de v e, enquanto tiver vertices alcancaveis ainda nao visitados continuar "percorrendo o grafo", andando de
        vizinho em vizinho sucessivamente


    Arvore
        Um grafico conexo aciclico é chamado de arvore.
        Em uma arvore, vertices de grau 1 são chamados de folhas
        Uma arvore pode ser enraizada em algum vertice chamado de raiz da arvore
        Diremos que os vertices conectados por uma aresta são pais e filhos, sendo os vertices de baixo
        os filhos dos superiores.

*/


/*
    Exercicio:  Gincana
        Em uma sala com N alunos numerados de 1 a N, temos M relaçãos de amigos, cada relação de amizade é dada na forma de um par (i,j) que indica
        que tanto i é amigo de j quanto j é amigo de i. A professora de Juquinha quer seprar a sala de maneira a ter o  maximo numero de times possiveis.
        Responda quantos times a professora pode formar
*/

const int MAX = 1e3+10;
vector<vector<int>> g(MAX);
vector<bool> vis(MAX);

void dfs(int v){
    vis[v] = true;
    for (auto w : g[v]) if (!vis[w]) {
        dfs(w);
    }
} 


int main(){ _ 

    int n, m; cin >> n >> m;
    for (int k = 0; k < m; k++){
        int i, j; cin >> i >> j; i--, j--;

        g[i].push_back(j);
        g[j].push_back(i);
    }

    int times = 0;
    for (int i = 0; i < n; i++) if (!vis[i]){
        dfs(i);
        times++;
    }
    
    cout << times << endl;








    exit(0);
}