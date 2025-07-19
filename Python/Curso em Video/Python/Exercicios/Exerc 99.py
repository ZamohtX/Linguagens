import time

def maior(*num):
    print('-=' * 20)
    print('Analisando os valoes passados...')
    for c in num:
        print(f'{c} ',end='', flush=True)
        time.sleep(0.5)
    print(f'Foram informados {len(num)} valores ao todo')
    cont = 0
    for c in num:
        cont += 1
        if cont == 1:
            mai = c
        else:
            if c > mai:
                mai = c
    print(f'O maior valor informado foi {mai}.')




maior(2,6,4,2,4,1,1,4,5)