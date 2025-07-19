def area(a,b):
    totarea = a * b
    return totarea


print('-=' * 20)
print(f"{'Controle de Terreno':^20}")
print('-=' * 20)
larg = float(input('Largura (m): '))
comp = float(input('Comprimento (m): '))
print(f'A área de um terreno {larg}x{comp} é de {area(larg,comp)}m²')
