# Orientação a Objetos: Paradigma de Programação

# Classes e Objetos

class Veiculo:
    def __init__(self, fabricante, modelo):
        self.__fabricante = fabricante
        self.__modelo = modelo 
        self.__num_registro = None
        
    # Getter
    def get_fabr_modelo(self):
        print(f'modelo {self.__modelo}, fabricante {self.__fabricante}')

    def get_num_registro(self):
        return self.__num_registro

    # Setter
    def set_num_registro(self, registro):
        self.__num_registro = registro


    def movimentar(self):
        print('Sou um veiculo e me desloco!')

class Carro(Veiculo):
    # Metodo init será herdado
    def movimentar(self):
        print('Sou um carro e ando pelas ruas')


class Motocicleta(Veiculo):
    
    def movimentar(self):
        print(f'Corro Muito')


class Aviao(Veiculo):
    def __init__(self, fabricante, modelo, categoria):
        self.__cat = categoria
        super().__init__(fabricante, modelo)
        
    def get_categoria(self):
        return self.__cat

    def movimentar(self):
        print('EU voo alto')


if __name__ == '__main__':
    meu_veiculo = Veiculo('GM', 'Cadillac Escalade')
    meu_veiculo.movimentar()
    meu_veiculo.get_fabr_modelo()
    meu_veiculo.set_num_registro(str(490321-1))
    print(f'Registro: {meu_veiculo.get_num_registro()}\n')

    meu_carro = Carro('Volkswagen', 'Polo')
    meu_carro.movimentar()
    meu_carro.get_fabr_modelo()

    seu_carro = Carro('Audi', 'A5 Sportback')
    seu_carro.movimentar()
    seu_carro.get_fabr_modelo()
    
    moto = Motocicleta('Harley-Davidson', 'Nightster Special')
    moto.movimentar()
    moto.get_fabr_modelo()
    

    meu_aviao = Aviao('Boing', '747', 'Comercial')
    meu_aviao.movimentar()
    meu_aviao.get_fabr_modelo()
    print(f'Categoria: {meu_aviao.get_categoria()}')