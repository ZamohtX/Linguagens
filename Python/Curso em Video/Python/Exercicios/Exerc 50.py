'''Desenvolva um programa que leia seis números inteiros e mostre a soma apenas daqueles que forem pares.
 Se o valor digitado for ímpar, desconsidere-o.'''
pares = 0
soma = 0
for c in range(1, 7):
    num = int(input(f'Digite o {c} valor: '))
    if num % 2 == 0:
        pares += 1
        soma += num
print(f'Você digitou {pares} números pares e a soma deles é {soma}') 
    