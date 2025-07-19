import moedas

p = float(input('Digite o preço: R$'))
print(f'A metade de R${p} é R${moedas.metade(p)}')
print(f'O dobro de R${p} é R${moedas.dobro(p)}')
print(f'Aumentando 10%, temos R${moedas.aumentar(p,10)}')