# Função reduce():
                    # Operação Cumulativa, item por item, acumulando valores

#     Sintaxe:
#  reduce(funcao, sequencia, valor_inicial)

from functools import reduce


def mult(x,y):
    return x * y

numeros = [1,2,3,4,5,6]
total = reduce(mult, numeros)
print(total)

numeros = [1,2,3,4]
total = reduce(lambda x,y: x**2 + y**2, numeros)
print(total)

























