''' : Elabore um programa que calcule o valor a ser pago por um produto, considerando o seu preço normal
 e condição de pagamento:
- à vista dinheiro/cheque: 10% de desconto
- à vista no cartão: 5% de desconto
- em até 2x no cartão: preço formal
- 3x ou mais no cartão: 20% de juros'''
print(f'{' LOJAS GUANABARA ':=^40}')
preco = float(input('Preço das compras: R$'))
print('''FORMAS DE PAGAMENTO
[ 1 ] à vista dinheiro/cheque
[ 2 ] à vista cartão
[ 3 ] 2x no cartão
[ 4 ] 3x ou mais no cartão''')
opcao = int(input('Qual é a opção? '))
if opcao == 1:
    precofinal = preco * 0.9
    print(f'Sua compra de R${preco}, vai custar R${precofinal} no final.')
elif opcao == 2:
    precofinal = preco * 0.95
    print(f'Sua compra de R${preco}, vai custar R${precofinal} no final')    
elif opcao == 3:
    precofinal = preco
    parcela = precofinal / 2
    print(f'Sua compra sera parcelada em 2x de R${parcela} SEM JUROS')
    print(f'Sua compra de R${preco}, vai custar R${precofinal} no final')
elif opcao == 4:
    precofinal = preco * 1.2
    numparc = int(input('Quantas parcelas? '))
    parcela = precofinal / numparc
    print(f'Sua compra será parcelada em {numparc}x de R${parcela} COM JUROS')
    print(f'Sua compra de R${preco}, vai custar R${precofinal} no final')