#Escreva um programa para aprovar o empréstimo bancário para a compra de uma casa.
#  Pergunte o valor da casa, o salário do comprador e em quantos anos ele vai pagar.
#  A prestação mensal não pode exceder 30% do salário ou então o empréstimo será negado.
casa = float(input('Valor da casa: R$'))
salario = float(input('Salário do comprador: R$'))
anos = float(input('Quantos anos de financiamento? '))
prestação = casa / (anos * 12)
print(f'Para pagar uma casa ed {casa:.2f} em {anos} anos a pretação será de R${prestação:.2f}')
if prestação > (salario * 0.3):
    print('Empréstimo NEGADO!!')
else:
    print('Empréstimo APROVADO!!')
