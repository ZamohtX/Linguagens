import datetime

def voto(a):
    if a < 16:
        return 'NÃO VOTA'
    elif 16 >= a < 18:
        return ' VOTO OPCIONAL'
    elif a > 75:
        return  'VOTO OPCIONAL'
    else:
        return 'VOTO OBRIGATORIO'
    

print('-=' * 20)
nasc = int(input('Em que ano você nasceu? '))
idade = datetime.date.today().year - nasc
print(f'Com {idade} anos: {voto(idade)}')

