from tkinter import *
from tkinter import ttk

# Cores
cor1 = '#1e1f1e'  # Preto
cor2 = '#feffff'  # Branco
cor3 = '#38576b' # Azul Forte
cor4 = '#ECEFF1'  # Cinza
cor5 = '#FFAB40'  # Laranja


# Criando a janela
janela = Tk() # cria a janela
janela.title('Calculadora') # define o nome da janela
janela.geometry('235x310') # define um tamanho padrao pra quando a janela abrir
janela.config(bg=cor1) # Definiu a cor do background


# Dividindo a janela em duas parte: Display e Corpo
    # Primeiro Frame: Display
frame_tela = Frame(janela, width=235, height=50, bg=cor3) # cria um frame em um local especifico da tela
frame_tela.grid(row=0, column=0) # Define o local especifico da tela
    # Segundo Frame: Corpo
frame_corpo = Frame(janela, width=235, height=268) # cria o segundo frame abaixo do primeiro
frame_corpo.grid(row=1, column=0) # Define o local


todos_valores = ''
# Criando Função pra entrada de dados
def entrar_valores(event):
    global todos_valores
    todos_valores = todos_valores + str(event)
    #passando valor pra tela:
    valor_texto.set(todos_valores)


# Criando função pra calcular
def calcular():
    global todos_valores
    try:
        resultado = str(eval(todos_valores))
    except SyntaxError:
        resultado = 'ERROR'
        valor_texto.set(resultado)
    else:
        valor_texto.set(str(resultado))
        todos_valores = resultado


def limpar_tela():
    global todos_valores
    todos_valores = ''
    valor_texto.set('')




# Criando Tela de Resultado
valor_texto = StringVar()
app_label = Label(frame_tela, textvariable=valor_texto, width=16, height=2, padx=7, relief=FLAT, anchor='e', justify=RIGHT, font=('Ivy 18'), bg=cor3, fg=cor2)
app_label.place(x=0, y=0)



# Criando os Botões
    # Criando o Clean
b_1 = Button(frame_corpo, command= limpar_tela, text='C', width=11, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE)     
b_1.place(x=0, y=0) # Posiciona o botão criado em uma parte do frame                                                      
    # Criando o Modulo
b_2 = Button(frame_corpo, command = lambda: entrar_valores('%'), text='%', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_2.place(x=118, y=0) 
    # Criando a Divisão
b_3 = Button(frame_corpo, command = lambda: entrar_valores('/'), text='/', width=5, height=2, bg=cor5, fg=cor2, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_3.place(x=177, y=0) 

    # Criando o 7
b_4 = Button(frame_corpo, command = lambda: entrar_valores('7'), text='7', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_4.place(x=0, y=52) 
    # Criando o 8
b_5 = Button(frame_corpo, command = lambda: entrar_valores('8'), text='8', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_5.place(x=59, y=52) 
    # Criando o 9
b_6 = Button(frame_corpo, command = lambda: entrar_valores('9'), text='9', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_6.place(x=118, y=52) 
    # Criando a Mutiplicação
b_7 = Button(frame_corpo, command = lambda: entrar_valores('*'), text='*', width=5, height=2, bg=cor5, fg=cor2, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_7.place(x=177, y=52) 

    # Criando o 6
b_8 = Button(frame_corpo, command = lambda: entrar_valores('6'), text='6', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_8.place(x=0, y=104) 
    # Criando o 5
b_9 = Button(frame_corpo, command = lambda: entrar_valores('5'), text='5', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_9.place(x=59, y=104) 
    # Criando o 4
b_10 = Button(frame_corpo, command = lambda: entrar_valores('4'), text='4', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_10.place(x=118, y=104) 
    # Criando a Subtração
b_11 = Button(frame_corpo, command = lambda: entrar_valores('-'), text='-', width=5, height=2, bg=cor5, fg=cor2, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_11.place(x=177, y=104) 

    # Criando o 1
b_12 = Button(frame_corpo, command = lambda: entrar_valores('1'), text='1', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_12.place(x=0, y=156) 
    # Criando o 2
b_13 = Button(frame_corpo, command = lambda: entrar_valores('2'), text='2', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_13.place(x=59, y=156) 
    # Criando o 4
b_14 = Button(frame_corpo, command = lambda: entrar_valores('3'), text='3', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_14.place(x=118, y=156) 
    # Criando a Adição
b_15 = Button(frame_corpo, command = lambda: entrar_valores('+'), text='+', width=5, height=2, bg=cor5, fg=cor2, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_15.place(x=177, y=156) 

    # Criando o 0
b_16 = Button(frame_corpo, command = lambda: entrar_valores('0'), text='0', width=11, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE)     
b_16.place(x=0, y=208) # Posiciona o botão criado em uma parte do frame                                                      
    # Criando o '.'
b_17 = Button(frame_corpo, command = lambda: entrar_valores('.'), text='.', width=5, height=2, bg=cor4, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_17.place(x=118, y=208) 
    # Criando o Resultado
b_18 = Button(frame_corpo, command = calcular, text='=', width=5, height=2, bg=cor5, fg=cor2, font=('Ivy 13 bold'), relief=RAISED, overrelief=RIDGE) 
b_18.place(x=177, y=208) 






janela.mainloop() #Abre o app
































