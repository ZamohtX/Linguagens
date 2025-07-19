def formatmoeda(moeda):
    preco = str(moeda)
    formatado = f'R${preco.replace(".",",")}'
    return formatado

def aumentar(preco, taxa, formato=False):
    res = preco + (preco * taxa/100)
    return res if formato is False else formatmoeda(res)

def diminuir(preco, taxa, formato=False):
    res = preco - (preco * taxa/100)
    return res if formato is False else formatmoeda(res)


def dobro(preco, formato=False):
    res = preco * 2 
    return res if formato is False else formatmoeda(res)


def metade(preco, formato=False):
    res = preco / 2 
    return res if formato is False else formatmoeda(res)
