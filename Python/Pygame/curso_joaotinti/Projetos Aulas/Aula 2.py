import pygame
from pygame.locals import *
from sys import exit

pygame.init()


# --------------- Criando a Janela -------------
largura = 640 
altura = 480
tela = pygame.display.set_mode((largura, altura))
# --------------- Definindo o Nome do Jogo -------------
pygame.display.set_caption("Jogo Teste")
# --------------- Codigo Principal -------------
while True:
    for event in pygame.event.get():  
        if event.type == QUIT:  # Pra sair do jogo quando fechar a janela
            pygame.quit()
            exit()
    # Desenhando Objetos na tela
    pygame.draw.rect(tela, (255,0,0), (200,300,40,50), ) # RETÂNGULO (coord_x, coord_y, comprimeto, altura) -> parametros desse comando
    pygame.draw.circle(tela, (0,0,255), (300,260), 40) # CIRCULO (pos_X, pos_y) , Raio 
    pygame.draw.line(tela, (255,255,0), (390,0), (390, 600), 5) # RETA  (pos_inicial_X, pos inicial_y), (pos_final_x, pos_final_y), espessura




    pygame.display.update() # Atualiza a tela a cada iteração do codigo
