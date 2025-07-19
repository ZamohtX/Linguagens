''' Melhore o DESAFIO 061, perguntando para o usuário se ele quer mostrar mais alguns termos. 
O programa encerrará quando ele disser que quer mostrar 0 termos.
'''
print('GERADOR DE PA')
print('-=' * 20)
termo = int(input('Primeiro termo: '))
razao = int(input('Razão da PA: '))
contador = 0
numterm = 0
x = 10
while x != 0:
    numterm += x
    contador = 0
    while contador != x:
        print(f'{termo} -> ', end='')
        termo += razao
        contador += 1
    print('PAUSA')
    x = int(input('Quantos termos você quer motrar a mais? '))
print(f'Progressão finalizada com {numterm} termos mostrados')