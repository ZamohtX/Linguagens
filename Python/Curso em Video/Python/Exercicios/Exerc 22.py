import time
nome = str(input('Digite seu nome completo: ')).strip().capitalize()
nomeprinc = nome.split()
print('Analisando seu nome...')
time.sleep(3)
print(f'Seu nome em maiúsculas é {nome.upper()}')
print(f'Seu nome em maiúsculas é {nome.lower()}')
print(f'Seu nome tem ao todo {len(nome) - nome.count(' ')} letras')
print(f'Seu primeiro nome é {nomeprinc[0]} e ele tem {len(nomeprinc[0])} letras')