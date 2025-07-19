#include <iostream>
using namespace std;



int main(){

    int n; cin >> n;
    bool primo = true;

    if (n < 2) cout << "nao" << endl;
    
    for (int i = 2; i*i <= n; i++){
        if (n % i == 0){
            primo = false;
            break;
        }
    }
    
    if (primo == true){
        cout << "sim" << endl;
    }else{ 
        cout << "nao" << endl;
    }




    return 0;
}