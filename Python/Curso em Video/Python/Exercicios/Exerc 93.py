'''Crie um programa que gerencie o aproveitamento de um jogador de futebol.
 O programa vai ler o nome do jogador e quantas partidas ele jogou.
   Depois vai ler a quantidade de gols feitos em cada partida.
     No final, tudo isso será guardado em um dicionário, 
     incluindo o total de gols feitos durante o campeonato.
'''
dados = {}
goals = []
total = 0
dados['nome'] = str(input('Nome do jogador: ')).strip().capitalize()
partidas = int(input(f'Quantas partidas {dados['nome']} jogou? '))
for c in range(0, partidas):
    partida = int(input(f'Quantos gols na partida {c+1}? '))
    total += partida
    goals.append(partida)
dados['goals'] = goals.copy()
dados['total'] = total
print('-=' * 20)
print(dados)
print('-=' * 20)
for k,v in dados.items():
    print(f'O campo {k} tem valor {v}')
print('-=' * 20)
print(f'O jogador {dados['nome']} jogou {partidas}.')
for k,v in enumerate(dados['goals']):
    print(f'    -> Na partida {k +1}, fez {v} goals.')
print(f'Foi um total de {dados['total']} goals')
   