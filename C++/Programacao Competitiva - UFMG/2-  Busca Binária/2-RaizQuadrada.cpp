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



int main(){ _ 
    
    cout << fixed << setprecision(10);

    double N; cin >> N;
    double l = 0, r = 1e8+10;

    for (int i = 0; i < 200; i++){
        double m = (l+r)/2;

        if (m*m > N) r = m;
        else l = m;
    }

    cout << (l+r/2) << endl;


    exit(0);
}