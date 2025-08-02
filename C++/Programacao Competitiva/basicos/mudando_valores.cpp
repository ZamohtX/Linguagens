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

    int n; cin >> n;
    vector<int> v(n), ordv(n);

    for (int i=0; i<n; i++){
        cin >> v[i];
        ordv[i] = v[i];
    }

    sort(ordv.begin(), ordv.end());

    map<int,int> novoIdx;
    for (int i = 0; i<n; i++) novoIdx[ordv[i]] = i;

    for (int i = 0; i<n; i++) v[i] = novoIdx[v[i]];


}






















