'''Crie um programa que leia nome, sexo e idade de várias pessoas, 
guardando os dados de cada pessoa em um dicionário e todos os dicionários em uma lista. No final, mostre: 
A) Quantas pessoas foram cadastradas
B) A média de idade
C) Uma lista com as mulheres
D) Uma lista de pessoas com idade acima da média'''
lista = []
dados = {}
media = totidade =  0
mulheres = []
while True:
    dados['nome'] = str(input('Nome: ')).strip().capitalize()
    while True:
        sexo = str(input('Sexo: [M/F] ')).strip().upper()
        if sexo not in 'MmFf':
            print('ERRO! Por favor, Digite apenas M ou F')
        else:
            dados['sexo'] = sexo
            break
    if sexo in 'Ff':
        mulheres.append(dados['nome'])
    dados['idade'] = int(input('Idade: '))
    totidade += dados['idade']
    lista.append(dados.copy())
    dados.clear()
    while True:
        continuar = str(input('Quer continuar? [S/N] ')).strip().upper()
        if continuar not in 'SsNn':
            print('ERRO! Responda apenas S ou N.')
        else:
            break
    if continuar in 'N':
        break    
media = totidade / len(lista)
print('-=' * 20)
print(f'A) Ao todo temos {len(lista)} pessoas cadastradas')
print(f'B) A média de idade é de {media:.2f} anos')
print(f'C) As mulheres cadastradas foram ', end='')
for c in mulheres:
    print(f'{c} ', end='')
print( '\nD) Lista das pessoas que estão acima da média: ')
for k,v in enumerate(lista):
    if v['idade'] > media:
        print(f'nome = {v['nome']}; sexo = {v['sexo']}; idade = {v['idade']}')
print('<< ENCERRADO >>')
