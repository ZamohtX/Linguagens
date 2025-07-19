''' Crie um programa que leia vários números inteiros pelo teclado. 
O programa só vai parar quando o usuário digitar o valor 999, que é a condição de parada. No final,
mostre quantos números foram digitados e qual foi a soma entre eles (desconsiderando o flag).
'''
num = 0
x = 0
soma = 0
while num != 999:
    num = int(input('Digite um númeo [999 para parar]: '))
    soma += num
    x += 1
soma = soma - 999
x = x - 1
print(f'Você digitou {x} números e a soma entre eles foi {soma}.')