from tkinter  import *
from tkinter import ttk

# Cores
cor1 = '#3b3b3b' # Preto
cor2 = '#fffff3' # Branco
cor3 = '#48b3e0' # Azul


# Criando a Janela
janela = Tk()
janela.title('')
janela.geometry('650x260')
janela.configure(bg=cor1)

# Dividindo a Janela em 3 partes com Frames
    # Frame Titulo
frame_cima = Frame(janela, width=450, height=50, bg=cor2, pady=0, padx=3, relief=FLAT)
frame_cima.place(x=2,y=2)
    # Frame Opções
frame_esquerda = Frame(janela, width=450, height=220, bg=cor2 , pady=0, padx= 3, relief=FLAT)
frame_esquerda.place(x=2,y=54)
    # Frame Dados
frame_direita = Frame(janela, width=198, height=260, bg=cor2, pady=0, padx=3, relief=FLAT)
frame_direita.place(x=454,y=2)

# Definindo Estilo da Janela
estilo = ttk.Style(janela)
estilo.theme_use('clam')

# Labels Para os Frames
l_app_nome = Label(frame_cima, text='Calculadora de Unidades de Medidas', height=1, padx=0, relief=FLAT, anchor='center', font=('Ivy 15 bold'), fg=cor3, bg=cor2)
l_app_nome.place(x=50,y=10)

# Configurando Frame Cima
b_0 = Button(frame_esquerda, text='Peso', width=10, height=2, relief=FLAT, overrelief=SOLID, anchor='nw', font=("Ivy 15 bold "), fg=cor2, bg=cor3)
b_0.grid(row=0,column=0, sticky=NSEW, pady=5, padx=5)




janela.mainloop()