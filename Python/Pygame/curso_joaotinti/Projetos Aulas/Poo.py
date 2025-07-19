class Cachorro:
    def __init__(self, nome, cor_pelo, idade, tamanho):
        self.nome = nome
        self.cor_pelo = cor_pelo
        self.idade = idade
        self.tamanho = tamanho

    def latir(self):
        print('AuAu')

    def correr(self):
        print(f'{self.nome} está correndo!')



golden = Cachorro('Toby', 'marrom', 5, 'grande')
print(golden.nome)
golden.idade = 8
print(golden.idade)
golden.latir()
golden.correr()

pincher = Cachorro('Max', 'preto', 3, 'pequeno')
print(golden.tamanho)