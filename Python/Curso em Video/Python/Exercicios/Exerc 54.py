'''Crie um programa que leia o ano de nascimento de sete pessoas. 
No final, mostre quantas pessoas ainda não atingiram a maioridade e quantas já são maiores.'''
import datetime
maiores =  menores = 0
nasc = idade = 0
atual = datetime.date.today().year
for c in range(1,8):
    nasc = int(input(f'Em que ano a {c}º pesso nasceu? '))
    idade = atual - nasc
    if idade >= 18:
        maiores += 1
    elif idade < 18:
        menores += 1
print(f'Ao todo tivemos {maiores} pessoas maiores de idade')
print(f'E também tivemos {menores} pessoas menores de idade')