# Manipulação de arquivos de Texto

manipulador = open('arquivo.txt', 'r', encoding='utf-8')

print(f'\Método read():\n')
print(manipulador.read())

print(f'\n\Método readline():\n')
print(manipulador.readline())


print(f'\n\Método readlines():\n')
print(manipulador.readlines())

try:
    manipulador = open('arquivo.txt', 'r', encoding='utf-8')
    for linha in manipulador:
        linha = linha.rstrip()
        print(linha)
except IOError:
    print('Não foi possivel abrir o arquivo')
else:
    manipulador.close()