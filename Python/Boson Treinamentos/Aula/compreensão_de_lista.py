# Compreensão de Lista

      # Sintaxe:
# [expressao for item in lista]

numeros = [1,4,7,9,10,12,21]

    # com map 
quadrados = list(map(lambda x: x **2, numeros))
print(quadrados)

    # Com Compreesão de Lista
quadrados = [num ** 2 for num in numeros] # cria lista com o dobro de valores da outra lista
print(quadrados)


pares = [num for num in range(1,1200) if num % 2 == 0] # Cria lista com numeros pares de um range determinado
print(pares)


frase = 'A lógica é apenas o princípio da sabedoria, e não o seu fim'    # Cria lista com as vogais de uma frase
vogais = ['A','ã','a','e','i','o','u','á','é','í','ó','ú']
lista_vogais = [ v for v in frase if v in vogais]
print(f'A frase possui {len(lista_vogais)} vogais')
print(lista_vogais)


distributiva = [k * m for k in [2,3,5] for m in [10,20,30]]     # Distributiva entre os valores de duas listas
print(distributiva)


