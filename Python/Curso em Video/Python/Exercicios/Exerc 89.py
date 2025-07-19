'''Crie um programa que leia nome e duas notas de vários alunos e guarde tudo em uma lista composta. 
No final, mostre um boletim contendo a média de cada um e 
permita que o usuário possa mostrar as notas de cada aluno individualmente.'''
turma = []
aluno = []
while True:
    nome = str(input('Nome: ')).strip().capitalize()
    n1 = float(input('Nota 1: '))
    n2 = float(input('Nota 2: '))
    aluno.append(nome)
    aluno.append(n1)
    aluno.append(n2)
    turma.append(aluno[:])
    aluno.clear()
    continuar = str(input('Quer continuar? [S/N] ')).strip().upper()
    if continuar in 'Nn':
        break
print('-=' * 30)
print(f'Nº     {'NOME':^10}{'MÉDIA'}')
print('-' * 30)
for x,y in enumerate(turma):
    media = (y[1] + y[2]) / 2
    print(f'{x}     {y[0]:^10} {media:>10}')

