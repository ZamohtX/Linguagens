#include <iostream>

// namespace é o a forma de definir um escopo especifico e particular dentro do codigo
using namespace std; 


int main(){
    // cout - é o objeto de saida que substitui o printf
    // cin - é o objeto de entrada que substitui o scanf[
    // endl - é o objeto que especifica a quebra de linha \n
    cout << "Hello World" << endl;
  
    float num = 5.17;

    // Saida de Dados

        // Exibe num 
    cout << num << endl;
        // Exibe num com largura 10
    cout.width(10);
    cout << num << endl; 
        // Exibe num com largura 10, completando com x
    cout.width(10);
    cout.fill('x');
    cout << num << endl;
        // Exibe num com precisão 15
    cout.precision(15);
    cout << num << endl << endl;


    // Entrada de Dados
    cout << "Digite sua idade: ";
        // Lê um int
    int idade;
    cin >> idade;
        // Lê dois double
    cout << "Digite o peso e a altura: ";
    double peso, altura;
    cin >> peso >> altura;
    
        // Verificando se a entrada deu erro
    double x;
    cout << "Digite um valor no formato double: ";
    cin >> x;
    if (cin.fail()){
        // Erro na leitura
        cout << "Valor Invalido!" << endl;
        cin.clear(); // limpa o estado de erro do buffer
        cin.ignore(32767, '\n'); // descarta o restante do buffer
    } else{
        cout << "Valor Digitado: " << x;
    }
        

    return 0;
}
