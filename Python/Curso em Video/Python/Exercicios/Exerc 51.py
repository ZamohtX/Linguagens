'''Desenvolva um programa que leia o primeiro termo e a razão de uma PA
. No final, mostre os 10 primeiros termos dessa progressão.'''
print('=' * 40 )
print('10 TERMOS DE UMA PA')
print('=' * 40)
termo = int(input('Primeiro Termo: '))
razao = int(input('Razão: '))
decimo = termo + (10 - 1) * razao
for c in range(termo, decimo + 1 , razao):
    print(f'{c}',end= ' -> ')
print('ACABOU')
