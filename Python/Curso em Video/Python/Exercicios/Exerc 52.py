'''Faça um programa que leia um número inteiro e diga se ele é ou não um número primo.
'''
num = int(input('Digite um número: '))
primo = 0
for c in range(1, num + 1):
    if c == num:
        print(f'\033[31m{c}\033[m')
        primo += 1
    else:
        if num % c == 0:
            print(f'\033[31m{c}\033[m' , end=' ')
            primo += 1 
        else:
            print(f'\033[m{c}', end=' ')
print(f'O numéro {num} foi divisivel {primo} vezes')
if primo > 2:
    print('E por isso ele NÃO É PRIMO')
else:
    print('E por isso ele É PRIMO')