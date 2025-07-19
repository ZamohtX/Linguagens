"""
                    Getters e Setters
            

    Getters:
        Serve para conseguirmos acessar o valor do atributo privado
    
    Setters:
        Serve para conseguirmos settar o valor do atributo privado

"""



class Alarme:
    def __init__(self, estado: bool) -> None:
        self.__estado = estado

    # Getters e Setters
    def get_estado(self)-> bool:
        return self.__estado
    def set_estado(self, estado : bool) -> None:
        self.__estado = estado



















