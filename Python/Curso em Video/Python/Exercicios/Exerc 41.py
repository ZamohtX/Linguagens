#A Confederação Nacional de Natação precisa de um programa que leia o ano de nascimento de um atleta 
# e mostre sua categoria, de acordo com a idade:
'''- Até 9 anos: MIRIM
- Até 14 anos: INFANTIL
- Até 19 anos: JÚNIOR
- Até 25 anos: SÊNIOR
- Acima de 25 anos: MASTER'''
import datetime
nasc = int(input('Ano de nascimento: '))
idade = datetime.date.today().year - nasc
classfic = ' '
if 0 <= idade <= 9:
    classfic = 'MIRIM'
elif 9 < idade <= 14:
    classfic = 'INFANTIL' 
elif 14 < idade <= 19:
    classfic = 'JUNIOR'
elif 19 < idade <= 25:
    classfic =  'SÊNIOR'
elif idade > 25:
    classfic = 'MASTER'
else:
    classfic = 'INVALIDO'        
print(f'O atleta tem {idade} anos.')
print(f'Classificação: {classfic}')