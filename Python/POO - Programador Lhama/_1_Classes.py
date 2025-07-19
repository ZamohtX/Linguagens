#                                Classes

"""
    Classes possuem:
        |-> Atributos:
            Caracteristicas do Objeto

        |-> Métodos:
            Funções do objeto



"""


# Criando a Classe
class MinhaClasse:
    # Criando Construtor da classe
    def __init__(self, att):
        # Criando os atributos a partir do construtor
        self.meu_atributo = "Hello, World"
        self.att = att
    

    # Criando um método da Classe
        # método apenas com self
    def meu_metodo(self): # self para se referir a propria instancia da classe
        print("Estou no método")
        # método com parâmetros
    def meu_metodo2(self, num, mult):
        return num * mult



# Instanciando um objeto pela Classe
objeto = MinhaClasse("meu atributo")


""" APLICANDO CONCEITO"""
class ControleRemoto:
    def __init__(self, televisao, comodo):
        self.televisao = televisao
        self.comodo = comodo
    
    def avancar_canal(self):
        print("Canal Avançado!")

    def voltar_canal(self):
        print("Canal Voltado")

    def escolher_canal(self, canal):
        print(f'Alterado para o canal: {canal}')


controle_sala = ControleRemoto("Samsung", "Sala")
print(controle_sala.comodo)
print(controle_sala.televisao)
controle_sala.avancar_canal()
controle_sala.voltar_canal()
controle_sala.escolher_canal(5)








