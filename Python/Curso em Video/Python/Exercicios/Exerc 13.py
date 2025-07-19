salario = float(input('Qual o salário do funcionário? R$'))
aumento = float(input("Qual a porcentagem do aumento? "))
final = salario + (salario * (aumento / 100))
print(f'Um funcionário que ganhava R${salario:.2f}, com {aumento}% de aumento, passa a receber R${final:.2f}')