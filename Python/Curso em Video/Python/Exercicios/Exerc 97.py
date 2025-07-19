def titulo(msg):
    tam = len(msg) + 4
    print(f'~' * tam)
    print(f'  {msg}')
    print(f'~' * tam)


titulo('ola')