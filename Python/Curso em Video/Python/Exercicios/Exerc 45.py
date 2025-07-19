'''  Crie um programa que faça o computador jogar Jokenpô com você.'''
import time
import random
print('''Suas opções:
[ 0 ] PEDRA
[ 1 ] PAPEL
[ 2 ] TESOURA''')
jogador = int(input('Qual é sua jogada? '))
computador = random.randint(0,2)
print('JO')
time.sleep(1)
print('KEN')
time.sleep(1)
print('PO!!!')
print('-=' * 30)
if jogador == 0 and computador == 0:
    print('Computador jogou PEDRA\nJogador jogou PEDRA')
    print('-=' * 30)
    print('DEU EMPATE. VAMOS JOGAR NOVAMENTE!!!')
elif jogador == 0 and computador == 1:
    print('Computador jogou PAPEL\nJogador jogou PEDRA')
    print('-=' * 30)
    print('COMPUTADOR VENCE!!! Tente Novamente :)')
elif jogador == 0 and computador == 2:
    print('Computador jogou TESOURA\nJogador jogou PEDRA')
    print('-=' * 30)
    print('JOGADOR VENCE!! PARABÉNNSSS')
elif jogador == 1 and computador == 0:
    print('Computador jogou PEDRA\nJogador jogou PAPEL')
    print('-=' * 30)
    print('JOGADOR VENCE!! PARABÉNSSSS')
elif jogador == 1 and computador == 2:
    print('Computador jogou TESOURA\nJogador jogou PAPEL')
    print('-=' * 30)
    print('COMPUTADOR VENCE!!! Tente novamente :)') 
elif jogador == 2 and computador == 0:
    print('Computador jogou PEDRA\nJogador jogou TESOURA')
    print('-=' * 30)
    print('COMPUTADOR VENCE!!! Tente Novamente :)')
elif jogador == 2 and computador == 1:
    print('Computador jogou PAPEL\nJogador jogou TESOURA')
    print('-=' * 30)
    print('JOGADOR VENCE!! PARABÉNSSSSS')
elif jogador == 1 and computador == 1:
    print('Computador jogou PAPEL\nJogador jogou PAPEL')
    print('-=' * 30)
    print('DEU EMPATE. VAMOS JOGAR NOVAMENTE!!!')
elif jogador == 2 and computador == 2:
    print('Computador jogou TESOURA\nJogador jogou TESOURA')
    print('-=' * 30)
    print('DEU EMPATE. VAMOS JOGAR NOVAMENTE!!!!')
else:
    print('OPÇÃO INVALIDA. TENTE NOVAMENTE')      