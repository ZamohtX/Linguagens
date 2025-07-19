''' Crie um programa que leia a idade e o sexo de várias pessoas. A cada pessoa cadastrada,
 o programa deverá perguntar se o usuário quer ou não continuar. No final, mostre:
A) quantas pessoas tem mais de 18 anos.
B) quantos homens foram cadastrados.
C) quantas mulheres tem menos de 20 anos. '''
maioridade = homens = mulheres = 0
while True:
    print('-=' * 20)
    print('CADASTRE UMA PESSOA'.center(40))
    print('-=' * 20)
    idade = int(input('Idade: '))
    if idade >= 18:
        maioridade += 1
    sexo = str(input('Sexo: [M/F] ')).strip().upper()
    if sexo in 'Mm':
        homens += 1
    if sexo in 'Ff' and idade >= 20:
        mulheres += 1
    print('-' * 40)
    continuar = str(input('Quer continuar? [S/N] ')).strip().upper()
    if continuar in 'Nn':
        break
print(f'''Total de pessoas com mais de 18 anos: {maioridade}
Ao todo temos {homens} cadastrados.
E temos {mulheres} mulheres com menos de 20 anos''')