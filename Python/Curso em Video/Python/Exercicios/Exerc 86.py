''' Crie um programa que declare uma matriz de dimensão 3x3
e preencha com valores lidos pelo teclado
. No final, mostre a matriz na tela, com a formatação correta.'''
matriz = [ [0,0,0], [0,0,0], [0,0,0]]
for c in range(0,3):
    for x in range(0,3):
        matriz[c][x]= int(input(f'Digite um valor para [{c}, {x}]: '))
print('-=' * 30)
for c in range(0,3):
    for x in range(0,3):
        print(f'[{matriz[c][x]:^5}]',end='')
    print()
