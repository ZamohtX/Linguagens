''' Crie um programa que leia dois valores e mostre um menu na tela:
[ 1 ] somar
[ 2 ] multiplicar
[ 3 ] maior
[ 4 ] novos números
[ 5 ] sair do programa
Seu programa deverá realizar a operação solicitada em cada caso.'''
import time
x = float(input('Primero Valor: '))
y = float(input('Segundo valor: '))
opcao = 0
while opcao != 5:
    print('''    [ 1 ] SOMAR
    [ 2 ] MUTIPLICAR
    [ 3 ] MAIOR
    [ 4 ] NOVOS NÚMEROS
    [ 5 ] SAIR''')
    opcao = int(input('>>>>>> Qual sua opção? '))
    if opcao == 1:
        soma = x + y
        print(f'A soma entre {x} e {y} é {soma}')
    elif opcao == 2:
        mutiplicador = x * y
        print(f'A mutiplicação ente {x} e {y} é {mutiplicador}')
    elif opcao == 3:
        if x > y:
            maior = x
            print(f'O maior entre {x} e {y} é {maior}')
        elif x < y:
            maior = y
            print(f'O maior entre {x} e {y} é {maior} ')
        else:
            print(f'Não existe número maior entre {x} e {y}, são iguais')
    elif opcao == 4:
        x = float(input('Digite um número: '))
        y = float(input('Digite um número: '))
    print('-='*20)
    time.sleep(1)
print('FIM DO PROGRAMA!! VOLTE SEMPRE')