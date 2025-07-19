# Funções

def div(x, y):
    if y != x:
        return x / y
    else:
        return 'Impossivel dividir por 0'

# Declara que aqui é o Codigo Principal do projeto
if __name__ == '__main__':
    a = int(input('Digite um número: '))
    b = int(input('Digite outro numero: '))
    r = div(a,b)
    print(f'`{a} dividido por {b} é {r}')






















