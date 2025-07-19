'''Crie um programa onde o usuário digite uma expressão qualquer que use parênteses. 
Seu aplicativo deverá analisar se a expressão passada está com os parênteses abertos e fechados na ordem correta.'''
abertos = []
fechados = []
expressao = []
exp = str(input('Digite sua expressão: '))
expressao.append(exp)
for c in expressao:
    for x in c:
        if x == '(':
            abertos.append(x)
        elif x == ')':
            fechados.append(x)
if expressao[0][0] == ')' or expressao[0][-1] == '(' or len(abertos) != len(fechados):
    print('Sua expressão está errada')
else:
    print('Sua expressão está correta')