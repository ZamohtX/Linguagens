"""
                     Solid - Responsabilidade Unica


    SOLID:
        |-> Single Responsability:
            Dividir o programa em varios programas que contenham somente uma responsabilidade 
            






"""

class SistemaCadastral:
    # Programa Principal
    def cadastrar(self, nome: str, idade: int) -> None:
        if self.__verificar_dados(nome, idade):
            self.__armazenar_usuario()
        else:
            self.__indicar_erro()




    # Criando Métodos para dividir a responsabilidade com a funcao principal
    def __verificar_dados(self, nome: str, idade: int) -> bool:
        if isinstance(nome,str) and isinstance(idade, int):
            return True
        else:
            return False
        
    def __armazenar_usuario(self, nome:str, idade:int) -> None:
        print('Acessando o Banco de Dados...')
        print(f"Cadastrar o Usuario {nome}, Idade {idade}")

    def __indicar_erro(self) -> None:
        print("Dados Invalidos")












