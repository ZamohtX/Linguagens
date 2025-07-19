num = int(input('\033[0;35mMe diga um número qualquer: '))
if num % 2 == 0:
    print(f'\033[mO número {num} é \033[0;34mPAR\033[m')
else:
    print(f'\033[mO número {num} é \033[0;34mIMPAR\033[m')     