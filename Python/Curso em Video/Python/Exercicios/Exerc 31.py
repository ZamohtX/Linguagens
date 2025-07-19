#: Desenvolva um programa que pergunte a distância de uma viagem em Km.
#  Calcule o preço da passagem, cobrando R$0,50 por Km para viagens de até 200Km e R$0,45 parta viagens
#  mais longas.


dist = float(input('Qual a distância da sua viagem? '))
print(f'Você está prestes a começar sua viagem de {dist:.2f}Km.')
preco = 0 
if dist > 200:
    preco = dist * 0.45
    print(f'E o preço da sua viagem será de R${preco:.2f}')
else:
    preco = dist * 0.50
    print(f'E o preço da sua passagem será de R${preco:.2f}')    