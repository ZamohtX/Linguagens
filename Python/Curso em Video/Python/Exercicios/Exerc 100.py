import random
import time

def sorteia(lista):
    print('Sorteando 5 valores da lista: ', end='')
    for cont in range(0,5):
        n = random.randint(1,10)
        lista.append(n)
        print(f'{n} ', end='', flush=True)
        time.sleep(0.5)
    print('Pronto!!')

def sompar(lista):
    soma = 0
    for valor in lista:
        if valor % 2 == 0:
            soma += valor
    print(f'Somando os valores pares de {lista}, temos {soma}')



numeros = []
sorteia(numeros)
sompar(numeros)