

# Funções lambda (anonimas)

#   Sintaxe:
# lambda argumentos: expressao

quadrado = lambda x: x**2

for i in range(1,11):
    print(quadrado(i))

par = lambda x: x % 2 == 0
print(par(8))

fc = lambda f: (f - 32 ) * 5/9
print(fc(212))