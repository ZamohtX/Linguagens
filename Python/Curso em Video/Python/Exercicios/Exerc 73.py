''' Crie uma tupla preenchida com os 20 primeiros colocados da Tabela do Campeonato Brasileiro de Futebol, na ordem de colocação. 
Depois mostre:
a) Os 5 primeiros times.
b) Os últimos 4 colocados.
c) Times em ordem alfabética. 
d) Em que posição está o time da Chapecoense.
'''

tabela = ('Flamengo','Botafogo','Palmeiras','Fortaleza','Cruzeiro','São Paulo','Bahia','Athletico-PR',
          'Atlético-MG','Bragantino','Vasco da Gama','Criciúma','Juventude','Internacional','Corinthians','Grêmio',
          'EC Vitória','Cuiaba','Fluminense', 'Atlético-GO')
print(f'Lista de time do brasileirão: {tabela}')
print('-=' * 20)
print(f'Os 5 primeiros são: {tabela[0:5]}')
print('-=' * 20)
print(f'Os ultimos 4 são {tabela[-4:]}')
print('-=' * 20)
print(f'Times em ordem alfabética: {sorted(tabela)}')
print('-=' * 20)
print(f' O Vasco está na {tabela.index("Vasco da Gama") + 1}º posição')