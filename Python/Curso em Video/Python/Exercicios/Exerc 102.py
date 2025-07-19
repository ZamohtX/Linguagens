

def fatorial(x,show=False):
    num = x
    total = 1
    print('-=' * 20)
    for c in range(1,x + 1):
        total *= num
        if show == True:
            if c == x:
                print(f'{num} =', end=' ')
            else:
                print(f'{num} x', end=' ')
        num -= 1 
    print(total)
       
       
fatorial(5, show=True)