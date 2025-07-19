tab = int(input('Digite um número para ver sua tabuada: '))
mut = 0
print("-" * 20)
for c in range(0,10):
    mut += 1
    resultado = tab * mut
    print(f' {tab} x {mut} = {resultado}')
print('-' * 20)    
          