# Recursividade
                #Funções que chamam a se propria

# Formula geral para o fatorial:
# fatorial(num) = 1, se num = 0 ou num = 1 -> 'Caso-Base'
# fatorial(num) = num * fatorial(num - 1), para num > 1 -> 'Caso Recursivo'

def fatorial(num):
    if num == 1 or num == 0:
        return 1
    else:
        return num * fatorial(num - 1)
    

if __name__ == '__main__':
    x = int(input('Digite um número inteiro para calcular seu fatorial: '))
    try:
        res = fatorial(x)
    except RecursionError:
        print('O numero fornecido é muito grande ou negativo')
    else:
        print(f'O fatorial de {x} é {res}')
