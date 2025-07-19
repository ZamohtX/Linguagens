import time 

def contador(i,f,p):
    if p < 0:
        p *= 1
    if p == 0:
        p = 1
    print('-=' * 20)
    print(f'Contagem de {i} até {f} de {p} em {p}')
    time.sleep(2)
    if i < f:
        cont = i 
        while cont <= f:
            print(f'{cont} ', end='', flush=True)
            time.sleep(0.5)
            cont += p
        print('FIM!')
    else:
        cont = i
        while cont >= f:
            print(f'{cont} ', end='', flush=True)
            time.sleep(2)
            cont -= p
        print('FIM!')


contador(1,10,1)
contador(10,0,2)
print('-=' * 20)
print('Agora é sua vez de personalizar a contagem ')
inicio = int(input('Inicio: '))
fim = int(input('Fim: '))
passo = int(input('Passo: '))
contador(inicio, fim, passo)