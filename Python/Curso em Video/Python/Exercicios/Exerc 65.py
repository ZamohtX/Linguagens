''' Crie um programa que leia vários números inteiros pelo teclado. 
No final da execução, mostre a média entre todos os valores e qual foi o maior e o menor valores lidos.
 O programa deve perguntar ao usuário se ele quer ou não continuar a digitar valores.
'''
continuar = ' '
soma = qt = maior = menor = 0
while continuar not in 'Nn':
    qt += 1
    num = int(input('Digite um número: '))
    if qt == 1:
        maior = num
        menor = num
    else:
        if num > maior:
            maior = num
        elif num < menor:
            menor = num
    soma += num
    continuar = str(input('Quer continuar? [S/N] ')).strip().upper()
media = num / qt
print(f'Você digitou {qt} números e a média foi de {media}')
print(f'O maior valor digitado foi {maior} e o menor foi {menor} ')