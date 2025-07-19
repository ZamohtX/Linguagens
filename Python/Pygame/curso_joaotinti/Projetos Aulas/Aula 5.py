import pygame
from pygame.locals import *
from sys import exit
from random import randint





pygame.init()

largura = 640 
altura = 480
x = largura / 2
y = altura / 2

x_azul = randint(40,600)
y_azul = randint(50,430)

# --------------- Criando a Janela -------------
tela = pygame.display.set_mode((largura, altura))
# --------------- Definindo o Nome do Jogo -------------
pygame.display.set_caption("Jogo Teste")
# --------------- FPS Do Jogo ------------------
relogio = pygame.time.Clock()
# --------------- Codigo Principal -------------
while True:
    relogio.tick(150) # Definindo o FPS
    tela.fill((0,0,0)) # Limpando a Tela a cada iteração pra tirar o rastro de movimento do objeto
    for event in pygame.event.get():  
        if event.type == QUIT:  # Pra sair do jogo quando fechar a janela
            pygame.quit()
            exit()
        # Fazendo meu objeto se mover pelo teclado
        if pygame.key.get_pressed()[K_a]:
            x = x - 20
        if pygame.key.get_pressed()[K_d]:
            x = x + 20
        if pygame.key.get_pressed()[K_w]:
            y = y - 20
        if pygame.key.get_pressed()[K_s]:
            y = y + 20 

    # Desenhando Objetos na telas
                # RETÂNGULO (coord_x, coord_y, comprimeto, altura) -> parametros desse comando
    ret_vermelho = pygame.draw.rect(tela, (0,0,255), (x, y, 40,50))
    ret_azul = pygame.draw.rect(tela, (255,0,0), (x_azul, y_azul, 40, 50))
    if ret_vermelho.colliderect(ret_azul):
        x_azul = randint(40,600) 
        y_azul = randint(50,430)


    pygame.display.update() # Atualiza a tela a cada iteração do codigo
