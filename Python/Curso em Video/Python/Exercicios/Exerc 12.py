preco = float(input('Qual é o preço do produto? R$'))
desconto = float(input('Qual o desconto? '))
final = preco - (preco * ( desconto /100))
print(f'O produto que custava R${preco:.2f}, na promoção com desconto de {desconto}% vai custar R${final:.2f}')