#include <iostream>
#include <string>
using namespace std;


struct ponto{
    int x, y;
};

struct quadrado{
    ponto p1, p2;
};


int main(){
 /*                 Ponteiro e Referencia


    Ponteiro é uma variavel que vai apontar para um enderço de memoria definido, podendo mudar o enderço que vai ser apontado,
    Referência é uma variavel que vai pontar para um endereço de memoria definda, mas não é possivel mudar o endereço referênciado.

 
 */
    // Ponteiro
    int idade = 21;
    int *ponteiro;
    ponteiro = &idade;
    cout << *ponteiro << endl;
    cout << ponteiro << endl;

    // Referencia 
        // Criando uma referencia para o endereço de memoria x
    int num = 22;
    int &refe = num;
    cout << "valor = " << num << endl;
    cout << "valor = " << refe << endl;
        // Ao mudar o valor de um o outro muda tbm
    refe = 25;
    cout << "valor = " << num << endl;
    cout << "valor = " << refe << endl;
        // Eles vao apontar para o mesmo enderço de memoria
    cout << "endereço  = " << &num << endl;
    cout << "endereço = " << &refe << endl;

        // Criando referencia para uma instancia de um struct
    ponto p = {4, 5};
    ponto &refP = p;
    cout << "valor = " << p.x << endl;
    cout << "valor = " << refP.x << endl;
        // Criando referencia para um atributo dentro de uma instancia de um struct
    quadrado q;
    int &refx = q.p1.x; 
    refx = 10;
    cout << "Valor = " << q.p1.x << endl;
    cout << "Valor = " << refx << endl;
        // Criando uma referencia com valor constante
    const int &ref1 = 100; 
    cout << "valor = " << ref1 << endl;
    const int &ref2 = 2 + 3; // Aponta para o resultado de uma operação matematica 
    cout << "valor = " << ref2 << endl; 








    return 0;
}