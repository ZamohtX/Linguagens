'''Faça um programa que mostre a tabuada de vários números, um de cada vez, para cada valor digitado pelo usuário.
 O programa será interrompido quando o número solicitado for negativo. '''

while True:
    
    tabuada = int(input('Quer ver a tabuada de qual valor? '))
    if tabuada < 0:
        break
    print('-' * 30)
    for c in range(1,11):
        resultado = tabuada * c
        
        print(f'{tabuada} x {c} = {resultado}')
    print('-' * 30)
print('PROGRAMA TABUADA ENCERRADO. Volte sempre!!!')