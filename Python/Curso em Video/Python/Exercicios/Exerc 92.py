'''Crie um programa que leia nome, ano de nascimento e carteira de trabalho
 e cadastre-o (com idade) em um dicionário. Se por acaso a CTPS for diferente de ZERO, 
 o dicionário receberá também o ano de contratação e o salário. 
 Calcule e acrescente, além da idade, com quantos anos a pessoa vai se aposentar.'''
import datetime
dados = {}

dados['nome'] = str(input('Nome: ')).strip().capitalize() 
dados['idade'] = datetime.date.today().year - int(input('Ano de nascimento: '))  
ctps = int(input('Carteira de trabalho: (0 não tem) '))
if ctps != 0:
    dados['ctps'] = ctps
    dados['contratação'] = int(input('Ano de contratação: '))
    dados['salário'] = float(input('Salário: R$'))
    dados['aposentadoria'] = 35 - (datetime.date.today().year - dados['contratação'])
print('-=' * 20)
for c, v in dados.items():
    print(f'- {c} tem o valor {v}')























