'''Faça um programa que leia nome e peso de várias pessoas, guardando tudo em uma lista. No final, mostre:
A) Quantas pessoas foram cadastradas.
B) Uma listagem com as pessoas mais pesadas.
C) Uma listagem com as pessoas mais leves.'''

pessoa = []
grupo = []
pesados = []
leves = []
maior =  menor = contador = 0
while True:
    nome = str(input('Nome: ')).strip().capitalize()
    peso = float(input('Peso: '))
    contador += 1
    if contador == 1:
        maior = peso
        menor = peso
    else:
        if peso > maior:
            maior = peso
        elif peso < menor:
            menor = peso
    pessoa.append(nome)
    pessoa.append(peso)
    grupo.append(pessoa[:])
    pessoa.clear()
    continuar = str(input('Quer continuar? [S/N] ')).strip().upper()
    if continuar == 'N':
        break
for c in grupo:
    if c[1] == maior:
        pesados.append(c[0])
    elif c[1] == menor:
        leves.append(c[0])
print(f'Ao todo você cadastrou {len(grupo)} pessoas.')
print(f'O maior peso foi de {maior}Kg. peso de {pesados}')
print(f'O menor peso foi de {menor}.Peso de {leves}')

