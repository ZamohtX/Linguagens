'''Refaça o DESAFIO 035 dos triângulos, acrescentando o recurso de mostrar que tipo de triângulo será formado:
- EQUILÁTERO: todos os lados iguais
- ISÓSCELES: dois lados iguais, um diferente
- ESCALENO: todos os lados diferentes
'''
print('-=' * 40 )
print('Analisador de Triângulos')
print('-=' * 40)
a = float(input('Primeiro segmento: '))
b = float(input('Segundo segmento: '))
c = float(input('Terceiro segmento: '))
tipo = ' '
if a < b + c and b < a + c and c < b + a:
    tipo = ''
    if  a == b == c:
        tipo = 'EQUILÁTERO'
    elif a == b != c or b == c != a or a == c != b:
        tipo = 'ISÓSCELES'
    else:
        tipo = 'ESCALENO'
    print(f'Os segmentos acima PODEM FORMAR um triângulo {tipo}!')        

else:
    print('Os segmentos acima NÃO PODEM FORMAR triângulo!')
        