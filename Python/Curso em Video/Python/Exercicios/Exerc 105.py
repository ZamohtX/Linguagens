def notas(*num, sit=False):
    dados = {}
    total =  maior = menor = media = cont = 0
    for c in num:
        cont += 1
        total += c
        if cont == 1:
            maior = c
            menor = c
        else:
            if c > maior:
                maior = c
            elif c < menor:
                menor = c 
    media = total / (len(num))
    dados["total"] = total
    dados["maior"] = maior
    dados["menor"] = menor
    dados['media'] = media
    if sit == True:
        if media >= 7:
            dados['situacao'] = 'BOA'
        if 5 <= media < 7:
            dados['situacao'] = 'RUIM'
        else:
            dados['situacao'] = 'PESSIMA'
    print(dados)


    



resp = notas(5,6,7,2,1,3.5,1,10, sit=True)