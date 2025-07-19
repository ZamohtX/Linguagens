import time
from random import randint

print(('\033[0;33m-=') * 40)
print('\033[0;34mVou pensar em um número de 0 a 5. Tente advinhar...')
print(('\033[0;33m-=') * 40)
comp = randint(0, 5)
jogador = int(input('\033[mEm que número eu pensei? '))
print('\033[0;35mPROCESSANDO...')
time.sleep(2)
if jogador == comp:
    print('\033[0;33mPARABÉNS! Você conseguiu me vencer!')
else:
    print(f'\033[0;31mGANHEI! Eu pensei no número {comp} e não no {jogador}]\033[m')    
