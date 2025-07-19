''' Faça um programa que leia nome e média de um aluno, 
guardando também a situação em um dicionário. 
No final, mostre o conteúdo da estrutura na tela.'''

aluno = {}
nome = str(input("Nome: ")).strip().capitalize()
media = float(input(f'Média de {nome}: '))
aluno['nome'] = nome
aluno['media'] = media
if aluno['media'] < 5:
    aluno['situação'] = 'Reprovado'
elif 5 <= aluno['media'] < 7:
    aluno['situação'] = 'Recuperação'
else:
    aluno['situação'] = 'Aprovado'
print('-=' *  20)
for v, i in aluno.items():
    print(f'- {v} é igual a {i}')