def leiaint(a):
    while True:
        x = input(f'{a}')
        if x.isnumeric() == True:
            break
        else:
            print('Erro! Digite um número inteiro valido.')    
    return x


n = leiaint('Digite um número: ')
print(f'Você acabou de digitar o número {n}')