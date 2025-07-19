'''Crie um programa onde o usuário possa digitar sete valores numéricos
 e cadastre-os em uma lista única que mantenha separados os valores pares e ímpares.
   No final, mostre os valores pares e ímpares em ordem crescente.'''
pares = []
impares = []
numeros = [[pares], [impares]]
for c in range(1, 8):
    valor = int(input(f'Digite o {c}º valor: '))
    if valor % 2 == 0:
        pares.append(valor)
    else:
        impares.append(valor)
print(numeros)