'''Escreva um programa que leia um número N inteiro qualquer e mostre na tela os N 
primeiros elementos de uma Sequência de Fibonacci. 
Ex: 0 - 1 - 1 - 2 - 3 - 5 - 8'''

print('-' * 30)
print('Sequência de Fibonacci')
print('-' * 30)
termos = int(input('Quantos termos você quer motrar? '))
print('~~'*15)
contador = resultado = num = 0
x = 1
while contador != termos:
    contador += 1
    num = resultado
    print(f'{resultado} ->' , end='')
    resultado += num
    print(num)
    if resultado == 0:
        resultado = 1 
    elif resultado == 1:
        resultado = 1
    
      
    
print('FIM')
print('~~'*15)

