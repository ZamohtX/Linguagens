'''Desenvolva um programa que leia quatro valores pelo teclado e guarde-os em uma tupla. No final, mostre:
A) Quantas vezes apareceu o valor 9.
B) Em que posição foi digitado o primeiro valor 3.
C) Quais foram os números pares.'''

n1 = int(input('Digite um número: '))
n2 = int(input('Digite outro número: '))
n3 = int(input('Digite mais um número: '))
n4 = int(input('Digite último número: '))
valores = (n1, n2, n3, n4)
pares = 0
print(f'O valor 9 apareceu {valores.count(9)}')
if 3 in valores:
    print(f'O valor 3 aparecu na {valores.index(3) + 1}º posição')
else:
    print('O valor 3 não foi digitado em nenhuma posição')
print(f'Os valores pares digtados foram ', end='')
for c in valores:
    if c % 2 == 0:
        print(c, end=' ')