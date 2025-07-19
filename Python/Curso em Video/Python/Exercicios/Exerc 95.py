''': Aprimore o desafio 93 para que ele funcione com vários jogadores, 
incluindo um sistema de visualização de detalhes do aproveitamento de cada jogador'''

jogadores = []
jogador = {}
totgol = []
while True:
    jogador['nome'] = str(input('Nome do jogador: ')).strip().capitalize()
    partidas = int(input(f'Quantas partidas {jogador['nome']} jogou? '))
    for c in range(0, partidas):
        goals = int(input(f'Quantos gols na partida {c+1}? '))
        totgol.append(goals)
    jogador['goals'] = totgol.copy()
    totgol.clear()
    jogadores.append(jogador.copy())
    jogador.clear()
    while True:
        continuar = (input('Quer continuar? [S/N] ')).strip().upper()
        if continuar not in 'SsNn':
            print('Erro! Digite somente S ou N')
        else:
            break
    if continuar in 'Nn':
        break
print('-=' * 30)

print(f'{'cod'}  {'nome'}{'gols':^25} {'total':<25}')
print('-=' * 25)
for k,v in enumerate(jogadores):
    total = 0
    for c in v['goals']:
        total += c
    print(f'{k}    {v['nome']}       {v['goals']:^25}{total:<25}')
print('-=' * 25)
while True:
    dados = int(input('Mostrar dados de qual jogador? (999 para parar) '))
    if dados == 999:
        break
    elif dados > (len(jogadores) - 1)  :
        print(f'ERRO! Não existe jogador com código {dados}!')
    else:
        print(f' -- LEVANTAMETNO DO JOGADOR {jogadores[dados]['nome']}:')
        for c in range(0, len(jogadores[dados]['goals'])):
            print(f'   No jogo {c+1} fez {jogadores[dados]['goals'][c]}')
    print('-=' * 20)
        
