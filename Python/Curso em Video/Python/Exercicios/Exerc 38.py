# Escreva um programa que leia dois números inteiros e compare-os. mostrando na tela uma mensagem:
#- O primeiro valor é maior
#- O segundo valor é maior
#- Não existe valor maior, os dois são iguais

v1 = int(input('Primero número: '))
v2 = int(input('Segundo valor: '))
if v1 > v2:
    print('O primeiro valor é maior')
elif v2 > v1:
    print('O segundo valor é maior')
else:
    print('Nõ existe valor maior, os dois são iguais')   
