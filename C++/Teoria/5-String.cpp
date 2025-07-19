#include <iostream>
#include <string>  
using namespace std;

int main(){ 
    /*            String

        Em C++ existe a classe std::string:
            Manipula sequências de caracteres de forma fácil e rápida
            Definida na biblioteca <string>
            A string passa a ser um objeto, e não apenas um array de caracteres como em C
    */

    char frase[6] = "oi"; // o i \0 ; ? x & — só cabem até 5 caracteres + '\0'

    // Declaração
    string str = "texto";// atribuição
    string strr("texto");

    // Copiando Variavel
    string nome = "Thomaz" ;
    string nome1, nome2;
    nome1 = "Xavier";
    nome2 = nome; // é possivel copiar os valores de um pra( outro apenas fazendo a atrbuição

    // Tamnho da String
    int tamanhoNome = nome.size();

    for(int i = 0; i < nome.size(); i++){
        cout << nome[i] << endl;
    }

    // Leitra de string
        // Leitura de Palavra (sem espaços)
    string texto;
    cin >> texto; 
    cin.ignore(32767, '\n'); // Limpa o Buffer para nao interferir nas proxmias leituras
    cout << "String lida: " << texto << endl;
        // Leitura de Frase
    string nome_completo;
    getline(cin, nome_completo);
    cout << "Nome: " << nome_completo << endl;


    // Manipulação de String
        // Tamanho da String
    string h = "Hello World!";
    cout << h.length() << endl; 
    cout << h.size() << endl;
        // Cópia de String
    string s1, s2 = "Hello, World!";
    s1 = s2;
        // Concatenação
    string nomeCompleto = "Thomaz";
    string segundo_nome = "Xavier";
    nomeCompleto += " "; // Concatenação por atribuição
    nomeCompleto.append(segundo_nome); // Concatena no final, como em um array
    nomeCompleto.push_back('!'); // Aceita somente um caractere tipo char

        // Comparação de String
    string palavra1 = "String";
    string palavra2 = "String";
            // Comparação por Operadores Relacionais
    if (palavra1 == palavra2)
        cout << "Iguais" << endl;
    else
        cout << "Diferentes" << endl;
            // Método compare()
    if (palavra1.compare(palavra2) == 0) // se for igual retorna 0 e diferente retorna 1
        cout << "Iguais" << endl;
    else
        cout << "Diferentes" << endl;



    return 0;
}
