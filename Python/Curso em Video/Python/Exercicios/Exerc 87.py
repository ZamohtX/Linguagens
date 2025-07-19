'''Aprimore o desafio anterior, mostrando no final: 
A) A soma de todos os valores pares digitados.
B) A soma dos valores da terceira coluna.
C) O maior valor da segunda linha.
'''
sompar = somter = maior2 = 0
matriz =[[0,0,0],[0,0,0],[0,0,0]]
for x in range(0,3):
    for y in range(0,3):
        matriz[x][y] = int(input(f'Digite um valor para [{x},{y}]: '))
print('-=' * 20)
for x in range(0,3):
    for y in range(0,3):
        print(f'[{matriz[x][y]:^5}]', end='')
    print()
cont = 0
for x in range(0,3):
    for y in range(0,3):
        if matriz[x][y] % 2 == 0:
            sompar += matriz[x][y]
        if y == 2:
            somter += matriz[x][y]
        if x == 1:
            cont += 1
            if cont == 1:
                maior2 = matriz[x][y]
            else:
                if matriz[x][y] > maior2:
                    maior2 = matriz[x][y]
     
print(f'A soma dos valores pares é {sompar}')
print(f'A soma dos valores da terceira coluna é {somter}')
print(f'O maior valor da segunda linha é {maior2}')
        
