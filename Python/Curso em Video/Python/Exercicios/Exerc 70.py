''' Crie um programa que leia o nome e o preço de vários produtos. O programa deverá perguntar se o usuário vai continuar ou não. No final, mostre:
A) qual é o total gasto na compra.
B) quantos produtos custam mais de R$1000.
C) qual é o nome do produto mais barato.'''

print('-=' * 20)
print('LOJA SUPER BARATÃO'.center(40))
print('-=' * 20)
caro = total = cont = menorpreco =0
barato = ' '
while True:
    produto = str(input('Nome do produto: ')).strip().capitalize()
    preco = float(input('Preço: R$'))
    cont += 1
    if cont == 1:
        barato = produto
        menorpreco = preco
    else:
        if preco < menorpreco:
            barato = produto
            menorpreco = preco
    total += preco
    if preco > 1000:
        caro += 1
    continuar = str(input('Quer continuar: [S/N] ')).strip().upper()
    if continuar in 'Nn':
        break
print(f'{'FIM DO PROGRAMA':-^40}')
print(f'''O total da compra foi de R${total:.2f}.
Temos {caro} produtos custando mais de R$1000,000.
O produto mais barato foi {barato} que custa R${menorpreco:.2f}''')