import pygame
from pygame.locals import *
from sys import exit

pygame.init()

largura = 640 
altura = 480
x = largura / 2
y = altura / 2



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
        '''if event.type == KEYDOWN:
            if event.key == K_a:
                x -= 20
            if event.key == K_d:4 
                x += 20                           
            if event.key == K_w:
                y -= 20
            if event.key == K_s:
                y += 20'''
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
    pygame.draw.circle(tela, (255,255,255), (x,y), 30)
                    



    pygame.display.update() # Atualiza a tela a cada iteração do codigo
