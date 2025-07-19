"""                     
                        Encapsulamento

    Encapsulamento se refere as permissões de uso de metodos e atributos,
    dividindo em publicos e privados


"""

class Pessoa:
    def __init__(self, nome, idade, cpf):
        # Atributos publicos
        self.nome = nome
        self.idade = idade
        # Atributo privado
        self.__cpf = cpf

    # Método Público
    def correr(self):
        print(f"{self.nome} está correndo")

    def beber(self, bebida):
        if bebida == "Cerveja":
            self.__apresentar_documento() # utiliza um método privado dentro do publico 
        print("bebendo...")

    # Método Privado
    def __apresentar_documento(self):
        print(self.__cpf)


pessoa = Pessoa("Thomaz", 20, "07156833499")
pessoa.beber("Cerveja")
pessoa.beber("agua")


















