
#           Trocar valores entre duas variaveis

a = 12
b = 31
a, b = b, a 
print(a, b)

#           Operador condicional ternario

menor = a if a < b else b
print(f'Menor valor: {menor}')
print(f'Menor valor: {(a, b)[a < b]}')

#           Generators

valores = [1,35,7,9,11,13,15]                  # Consome menos memoria do sistema 
quadrados = (item**2 for item in valores)      # Quadrado é iteravel
print(quadrados)
for valor in quadrados:
    print(valor)

#           Gerenciamento de Contexto com with
    
# Forma antiga
try:
    a = open('texto.txt', 'r', encoding='utf-8')
    print(a.read())
except IOError:
    print('Não foi possivel abrir o arquivo')
else:
    a.close()
# Com with:
with open('texto.txt', 'r', encoding='utf-8') as a:
    for linha in a:
        print(linha, end='')

