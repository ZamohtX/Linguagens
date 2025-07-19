import pygame
from pygame.locals import *
from sys import exit
from random import randint





pygame.init()
# --------------- Musicas------------
pygame.mixer.music.set_volume(0.1)
musica_de_fundo = pygame.mixer.music.load('musica_fundo.mp3')
pygame.mixer.music.play(-1)
som_colisao = pygame.mixer.Sound('som_colisao.mp3')
som_colisao.set_volume(1)
# --------------- Variavéis -------------
largura = 640 
altura = 480
x = int(largura / 2)
y = int(altura / 2)
x_azul = randint(40,600)
y_azul = randint(50,430)
pontos = 0
# --------------- Criando a Janela -------------
tela = pygame.display.set_mode((largura, altura))
# --------------- Nome do Jogo -------------
pygame.display.set_caption("Jogo Teste")
# --------------- Fontes -------------
fonte = pygame.font.SysFont('arial', 40, True, True)
# --------------- FPS Do Jogo ------------------
relogio = pygame.time.Clock()
# --------------- Codigo Principal -------------
while True:
    relogio.tick(500) # Definindo o FPS
    tela.fill((0,0,0)) # Limpando a Tela a cada iteração pra tirar o rastro de movimento do objeto
    mensagem = f'Pontos: {pontos}'
    texto_formatado = fonte.render(mensagem, True, (255,255,255))
    for event in pygame.event.get():  
        if event.type == QUIT:  # Pra sair do jogo quando fechar a janela
            pygame.quit()
            exit()
        # Fazendo meu objeto se mover pelo teclado
        if pygame.key.get_pressed()[K_a]:
            if x == 0:
                x = 0
            else:
                x = x - 20
        if pygame.key.get_pressed()[K_d]:
            if x > (largura - 40):
                x = largura - 40
            else:
                x = x + 20
        if pygame.key.get_pressed()[K_w]:
            if y < 0:
                y = 0
            else: 
                y = y - 20
        if pygame.key.get_pressed()[K_s]:
            if y > (altura - 50):
                y = altura - 50
            else:
                y = y + 20 

    # Desenhando Objetos na telas
                # RETÂNGULO (coord_x, coord_y, comprimeto, altura) -> parametros desse comando
    ret_vermelho = pygame.draw.rect(tela, (0,0,255), (x, y, 40,50))
    ret_azul = pygame.draw.rect(tela, (255,0,0), (x_azul, y_azul, 40, 50))
    # Fazendo um Objeto mudar de lugar na tela apos Colisão
    if ret_vermelho.colliderect(ret_azul):
        x_azul = randint(40,600) 
        y_azul = randint(50,430)
        pontos += 1
        som_colisao.play()
    # Colocando Texto na Tela
    tela.blit(texto_formatado, (0,0)) 


    pygame.display.update() # Atualiza a tela a cada iteração do codigo
