velocidade = float(input('Qual a velocidade atual do carro? '))
multa = 0
if velocidade <= 80:
    print('\033[0;33mTenha um bom dia! Dirija com segurança!')
else:
    print('\033[31mMULTADO! Você excedeu o limite permitido que é de 80Km/h')
    multa = (velocidade - 80) * 7 
    print(f'Você deve pagar uma multa de \033[0;33mR${multa:.2f}\033[m')