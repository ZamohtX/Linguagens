''' Faça um programa que leia um número qualquer e mostre o seu fatorial.
Ex: 5! = 5 x 4 x 3 x 2 x 1 = 120
'''
num = int(input('Digite um número para calcular seu fatorial: '))
acumulador = 1
print(f'Calculando {num}!=', end=' ')
while num != 0:
    acumulador = acumulador * num
    if num == 1:
        print(f'{num} =', end=' ')
    else:
        print(f'{num} x', end=' ')
    num -= 1
print(acumulador)
