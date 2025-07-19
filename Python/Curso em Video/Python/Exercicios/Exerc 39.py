# Faça um programa que leia o ano de nascimento de um jovem e informe, de acordo com a sua idade,
#  se ele ainda vai se alistar ao serviço militar, se é a hora exata de se alistar ou se já passou do tempo
#  do alistamento. Seu programa também deverá mostrar o tempo que falta ou que passou do prazo.
import datetime 
nasc = int(input('Ano de nascimento: '))
idade = datetime.date.today().year - nasc
print(f'Quem nasceu em {nasc} tem {idade} anos em {datetime.date.today().year} ')
if idade > 18:
    print(f'Você ja deveria ter se alistado há {idade - 18} anos.')
    print(f'Seu alistamento foi em {datetime.date.today().year - (idade - 18)}.')
elif idade < 18:
    print(f'Ainda faltam {18 - idade} para o alistamento.')
    print(f'Seu alistamento será em {datetime.date.today().year + (18 - idade)}')
else:
    print('Você tem que se alistar IMEDIATAMENTE')   