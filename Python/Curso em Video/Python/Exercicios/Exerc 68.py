'''Faça um programa que jogue par ou ímpar com o computador.
 O jogo só será interrompido quando o jogador perder,
   mostrando o total de vitórias consecutivas que ele conquistou no final do jogo. 
'''
import random

print('=-' * 20)
print('VAMOS JOGAR PAR OU IMPAR')
print('-=' * 20)
vitorias = 0
while True:
    comp = random.randint(0,10)
    jogador = int(input('Digite um valor: '))
    pi = str(input('Par ou Impar? [P/I] ')).strip().upper()
    total = comp + jogador
    print('-' * 40)
    print(f'Você jogou {jogador} e p computador {comp}. total de {total}', end=' ')
    if total % 2 == 0:
        print('DEU PAR')
    else:
        print('DEU IMPAR')
    print('-' * 40) 
    if pi in 'Pp':
        if total % 2 == 0:
            vitorias += 1
            print('Você VENCEU')
            print('Vamos jogar novamente...')
            print('-=' * 20)
        else:
            print('Você PERDEU')
            break
    elif pi in 'Ii':
        if total % 3 == 0:
            vitorias += 1
            print('Você VENCEU')
            print('Vamos jogar novamente')
            print('-=' * 20)
        else:
            print('Você PERDEU')
            break
print('-=' * 20)
print(f'GAME OVER! Você Venceu {vitorias} vezes.')

