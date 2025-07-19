frase = str(input('Digite uma frase: ')).strip().lower()

letra = str(input('Qual letra vc quer analisar? ')).strip().lower()
print(f'A letra {letra.upper()} aparece {frase.count('a')} na frase')
print(f'A primeira letra {letra.upper()} apareceu na posição {frase.find('a') + 1} ')
print(f'A ultima letra {letra.upper()} apareceu na posição {frase.rfind('a') + 1}')
