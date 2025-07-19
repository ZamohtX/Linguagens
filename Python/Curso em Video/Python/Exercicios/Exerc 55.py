'''Faça um programa que leia o peso de cinco pessoas. No final,
 mostre qual foi o maior e o menor peso lidos.'''

for c in range(1, 6):
    peso = float(input(f'Peso da {c}º pessoa: '))
    if c == 1:
        pesado = peso
        leve = peso
    else:
        if peso > pesado:
            pesado = peso
        elif peso < leve:
            leve = peso
print(f'O maior peso lido foi de {pesado}Kg')
print(f'O menor peso lido foi de {leve}Kg')