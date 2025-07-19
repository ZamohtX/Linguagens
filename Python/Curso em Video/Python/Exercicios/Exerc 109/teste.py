import formatmoeda

p = float(input('Digite o preço: R$'))
print(f'A metade de {formatmoeda.formatmoeda(p)} é R${formatmoeda.metade(p)}')
print(f'O dobro de {formatmoeda.formatmoeda(p)} é R${formatmoeda.dobro(p)}')
print(f'Aumentando 10%, temos {formatmoeda.formatmoeda(formatmoeda.aumentar(p,10))}')