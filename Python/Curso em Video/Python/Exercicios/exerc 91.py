'''Crie um programa onde 4 jogadores joguem um dado e tenham resultados aleatórios.
 Guarde esses resultados em um dicionário em Python.
 No final, coloque esse dicionário em ordem,
sabendo que o vencedor tirou o maior número no dado.'''
'''
import random
import time
import operator
jogo = {'jogador1': random.randint(1,6),
        'jogador2': random.randint(1,6),
        'jogador3': random.randint(1,6),
        'jogador4': random.randint(1,6)}
ranking = []
print('VALORES SORTEADOS:')
for k, v in jogo.items():
    print(f'{k} tirou {v} no dado.')
    time.sleep(0.5)
ranking = sorted(jogo.items(), key=operator.itemgetter(1), reverse=True)
print('-=' * 20)
print(' == RANKING DOS JOGADORES ==')
for i, v in enumerate(ranking):
    print(f'      {i + 1}º lugar: {v[0]} com {v[1]}')
    time.sleep(1)
'''
import random
import time
jogo = {}
ranking = []
ordenado = []
maior = menor = 0
print('VALORES SORTEADOS:')
for c in range(1,5):
    jogo[f'jogador{c}'] = random.randint(1,6)
    print(f'jogador{c} tirou {jogo[f'jogador{c}']} no dado')
    time.sleep(1)
    ranking.append(jogo[f'jogador{c}'])
ranking.sort(reverse=True)
for c, p in jogo.items():
    for x in range(1,5):
        if p == ranking[x - 1]:
            ordenado.insert(x-1, c)
            break
print('-=' * 20)
print('  == RANKING DOS JOGADORES ==')
for a,s in enumerate(ordenado):
    print(f'   {a+1}º lugar: {s} com {ranking[a]}')
    time.sleep(1)

#print('\n',ranking)
