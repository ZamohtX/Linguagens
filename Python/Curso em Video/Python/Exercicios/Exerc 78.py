'''Faça um programa que leia 5 valores numéricos e guarde-os em uma lista.
 No final, mostre qual foi o maior e o menor valor digitado e as suas respectivas posições na lista. '''
lista = []
for c in range(0,5):
    lista.append(int(input(f'Digite um valor para a Posição {c}: ')))
print('-=' * 40)
print(f'Você digitou os valores {lista}')
maior = menor = posmaior = posmenor = 0
maiores = []
menores = []
for pos, c in enumerate(lista):
    if pos == 0:
        maior = c
        menor = c
    else:
        if c > maior:
            maior = c          
        elif c < menor:
            menor = c
print(f'O maior  valor digitado foi {maior} nas posições: ', end='')
for p, c in enumerate(lista):
    if c == maior:
        print(f'{p}... ',end='')
print(f'\nO menor valor digitado foi {menor} nas posições ',end='')
for p,c in enumerate(lista):
    if c == menor:
        print(f'{p}...', end='')
