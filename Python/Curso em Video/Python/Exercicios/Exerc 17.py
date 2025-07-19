import math
co = float(input('Comprimento do cateto oposto: '))
ca = float(input('Comprimento do cateto adjacente: '))
hipo = math.hypot(co,ca)
print(f'A hipotenusa vai medir {hipo:.2f}')
