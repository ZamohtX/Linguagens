''' Crie um programa que vai gerar cinco números aleatórios e colocar em uma tupla.
 Depois disso, mostre a listagem de números gerados
e também indique o menor e o maior valor que estão na tupla.'''
import random
valores = (random.randint(0,10), random.randint(0,10), random.randint(0,10),
           random.randint(0,10), random.randint(0,10))
print(f'Os valores sorteados foram {valores}')
maior = menor = 0
for c, y in enumerate(valores):
    if c == 0:
        maior = y
        menor = y
    else:
        if y > maior:
            maior = y
        elif y < menor:
            menor = y
print(f'O maior valor sorteado foi {maior}')
print(f'O menor valor sorteado foi {menor}')