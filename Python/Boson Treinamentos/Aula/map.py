# Função map()

#   Sintaxe
# map(função, iteravel)

num = [1,2,3,4,5,6,7,8]
dobro = list(map(lambda x: x *2, num))
print(dobro)

palavras = ['Python', 'é', 'uma', 'linguagem', 'de', 'programação']
maiusculas = list(map(str.upper, palavras))
print(maiusculas)
