 // Biblioteca padrçaque ja inclui todos os includes  importantes
#include <bits/stdc++.h>

using namespace std;


// Deixa a entrada e sáida de dados mais rápida
#define _ ios_base::sync_with_stdio(0);cin.tie(0); 
#define endl '\n';

// Substitui em tempo de compilação as palavras, para não termos que digitar tanto
#define f first;
#define s second;

// Função de Debbug -> dbg(variavel)
#define dbg(x) cout << #x << " = " << x << endl;

// Nome alternativo para long long, nos fazendo digitar menos
typedef long long ll;

// Definição de valores infinitos para int e long
const int INF = 0x3f3f3f;
const ll LINF = 0x3f3f3f3f3f3f3f3fll;



int main() { _ // constante que definimos e deixa a entrada e saída rápida

                                    // Vector

        // Classe equivalente ao Array, com mais funcionalidades

    // Declaração de Array
    vector<int> array;
    
    // Declarção de Matriz
    vector<vector<int>> matriz;

    // Declarando com tamanho
    int tam = 5;
    vector<int> tamArray(tam);

    // Declarando com tamanho e inicializando com valor
    int tamanho = 5;
    int valor = 1;
    vector<int> inicializaComValor(tamanho, valor); 
    vector<vector<int>> matrizInicializada(10, vector<int>(1));

    // Acessando valor do Array
    matrizInicializada[1][2] = 4;

    // Adicionando na ultima posição
    array.push_back(valor);    

    // Tamanho do Vetor
    int tam = array.size();


                                    // String
        
        // String é um vector de caracteres

    // Declaração
    string str = "palavra";

    // Comparação de Strings
    string str1 = "igual", str2 = "igual";
    if (str1 == str2) cout << "strings iguais" << endl;

    // Acessando Caracteres de uma String
    char primeiraLetra = str[0];

    // Tratando Cracteres como Inteiros na Tabela ASCI
    string palavra = "abcde";
    for (int i = 0; i < palavra.size(); i++){
        palavra[i] -= 'a'; // saída: 01234;
    }


                                    // Set

        // Não aceita elementos repetidos e é uma estrutura ordenada

    // Declaração
    set<int> lista;

    // Inserir Elemento
    lista.insert(5);

    // Retirar Elemento
    lista.erase(5);

    // Verificar se Existe um Elemento dentro do Set
    lista.count(5); // retorna 1 ou 0


                                    // Pair

        // Classe que guarda dois elementos que podem ser ou não de tipos diferentes


    // Declaração
    pair<int, string> pessoa;

    // Atribuindo valor
    pessoa = {21, "Thomaz"};

    // Acessando valor
    int idade = pessoa.first;
    string nome = pessoa.second;


                                    // Map
        // Permite usar um tipo qualquer como chave de acesso para algum elemento
    
    // Declaração -> map<tipoChave,tipoValor> nomeMap
    map<string, int> mp;

    // Acessando valores
    mp["ribossomo"] = 1; // sempre que uma posição nova é acessada, ele cria a chave e seta o valor padrão do tipoValor, no caso de int é 0


                                    // Sort 
        // Ordena os elementos no range inicio ate o fim
    vector<int> v = {6,2,4,22,1,3};
    int n  = 4;
    sort(v.begin(), v.end()); // ordena todo o vetor v
    sort(v.begin(), v.begin()+n); // odena o vetor no intervalo definido [inicio, inicio+n]
    sort(v.begin(), v.end(), greater<>()); // ordena o vetor v do maior para o menor


                                    // Max e Min
            
        // Funções que recebem dois parametros do mesmo tipo e retornam o maior ou menor entre eles, respectivamente
    int maior = max(1,2); 
    int menor = min({1,2,3,45,5,6,7});


                                    // auto
    
        // Identifica o tipo  em tempo de compilação
    vector<int> v = {0,1,2};
    for (auto& i : v) i = i+1; // v = {1,2,3}
    for (auto i: v) cout << i << " ";
    cout << endl;


    set<pair<int,char>> as;

    as.insert({2,'a'});
    as.insert({1,'b'});

    for (auto p: as){ // identifica automaticamente o tipo recebido
        cout << p.first << " " << p.second << endl;
    }


    map<int, char> m;
    m[2] = 'b';
    m[1] = 'a';
    for (auto i : m) cout << i.first << " " << i.second << endl; // ao iterar um map, voce recebe um pair, sendo o first a chave e second o valor





                                    // stack e queue
    


}