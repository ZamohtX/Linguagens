#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        long long a, b;
        cin >> a >> b;

        long long resto = a % b;
        long long tot = (resto == 0) ? 0 : b - resto;

        cout << tot << endl;
    }

    return 0;
}
