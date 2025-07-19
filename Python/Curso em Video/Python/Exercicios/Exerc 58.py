'''Melhore o jogo do DESAFIO 028 onde o computador vai "pensar" em um número entre 0 e 10. 
Só que agora o jogador vai tentar adivinhar até acertar, 
mostrando no final quantos palpites foram necessários para vencer.'''
import random
contador = 1
print('''Sou seu computador...
Acabei de pensar em um número entre 0 e 10.
Será que você consegue advinhar qual foi? ''')
computador = random.randint(0,10)
palpite = int(input('Qual é seu Palpite? '))
while computador != palpite:
    contador += 1 
    if palpite > computador:
        print('Menos... Tente mais uma vez.')
    elif palpite < computador:
        print('Mais... Tente mais uma vez.')
    palpite = int(input('Qual é o seu palpite? '))
print(f'Acertou com {contador} tentativas. Parabéns!')