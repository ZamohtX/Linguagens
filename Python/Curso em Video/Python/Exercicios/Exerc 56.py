''' Desenvolva um programa que leia o nome, idade e sexo de 4 pessoas. No final do programa
, mostre: a média de idade do grupo, qual é o nome do homem mais velho 
e quantas mulheres têm menos de 20 anos.
'''
total = 0
velho = 0
nomevelho = ' '
mulheres = 0
for c in range(1,5):
    print(f'---- {c}º PESSOA ----')
    nome = str(input('Nome: ')).strip().capitalize()
    idade = int(input('Idade: '))
    sexo = str(input('Sexo [M/F]: ')).strip().upper()
    if sexo == 'M':
        if c == 1:
            velho = idade
            nomevelho = nome
        else:
            if idade > velho:
                velho = idade
                nomevelho = nome
    total += idade
    if sexo == 'F' and idade < 20:
        mulheres += 1 
media = total / 4 
print(f'A média de idade do grupo é de {media:.2f}')
print(f'O homem mais velho tem {velho} anos e se chama {nomevelho}')
print(f'Ao todo são {mulheres} mulheres com menos de 20 anos')