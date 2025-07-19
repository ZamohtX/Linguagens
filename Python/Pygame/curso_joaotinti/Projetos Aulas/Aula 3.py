import pygame
from pygame.locals import *
from sys import exit

pygame.init()

largura = 640 
altura = 480
x = largura / 2
y = 0



# --------------- Criando a Janela -------------
tela = pygame.display.set_mode((largura, altura))
# --------------- Definindo o Nome do Jogo -------------
pygame.display.set_caption("Jogo Teste")
relogio = pygame.time.Clock()
# --------------- Codigo Principal -------------
while True:
    relogio.tick(150)
    tela.fill((0,0,0)) # Limpando a Tela a cada iteração pra tirar o rastro de movimento do objeto
    for event in pygame.event.get():  
        if event.type == QUIT:  # Pra sair do jogo quando fechar a janela
            pygame.quit()
            exit()
    # Desenhando Objetos na tela
                # RETÂNGULO (coord_x, coord_y, comprimeto, altura) -> parametros desse comando
    pygame.draw.rect(tela, (255,0,0), (x,y,40,50), ) 
    if y >= altura:  # Fazendo com que o Objeto não ultrapasse a tela
        y = 0
    y += 1 # Atualizando Y para gerar movimento no objeto 
                



    pygame.display.update() # Atualiza a tela a cada iteração do codigo
