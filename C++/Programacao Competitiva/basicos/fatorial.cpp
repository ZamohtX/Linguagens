#include <iostream>
using namespace std;


int main(){
	int n; cin >> n;
	
	int total = 1;
	while (n > 0){
		total *= n;
		n--;
	}

	cout << total << endl;

	return 0;
}

