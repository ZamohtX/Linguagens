'''Faça um programa que ajude um jogador da MEGA SENA a criar palpites.
O programa vai perguntar quantos jogos serão gerados e vai sortear 6 números entre 1 e 60 para cada jogo,
 cadastrando tudo em uma lista composta.
'''
import random
jogo = []
completo = []
print('-=' * 20)   
print(f'{'MEGA SENA':^40}')
print('-=' * 20)
qt = int(input('Quantos jogos você quer que eu sorteie? '))
print(f'-=-=-=  SORTEANDO {qt} JOGOS  -=-=-=')
for c in range(1, qt + 1):
    for c in range(1,7):
        while True:
            computador = random.randint(0,61)
            if computador not in jogo:
                jogo.append(computador)
                break
    jogo.sort()
    completo.append(jogo[:])
    jogo.clear()
for c in range(0,qt):
    print(F'Jogo {c + 1}: {completo[c]}')
print('-=-=-=-=-= < BOA SORTE! > -=-==-==-')

