# Modulo OS (Operate System)

import os
import pathlib
import shutil

'''
sistema_operacional = os.name()                 # Mostra o sistema operecional do dispositivo

diretorio_atual = os.getcwd()                   # Mostra o caminho do diretorio atual 

atalho_dirAtual = os.curdir()                   # Faz referencia ao diretorio atual

conteudo_diretorio = os.listdir()               # Mostra todo o conteudo da pasta 

mudar_diretorio = os.chdir()                    # Muda para o diretorio especificado

criar_pasta = os.mkdir()                        # Cria uma pasta no caminho especificado 

pasta_nova = 'Teste2'
pasta_pai = 'C:\\'
caminho_copleto = os.path.join(pasta_pai,       # Monta um caminho a partir de variaveis
                               pasta_nova) 

renomear = os.rename(Caminho Antigo,      # Renomeia uma pasta no caminho especificado
                     Caminho Novo)                        

remover_diretorio = os.rmdir()                  # Exclui uma pasta no caminho especificado 

nome_pasta = os.path.basename()                 # Retorna o nome do diretorio a partir do caminho especificado

pasta_pai = os.getcwd()                         # Cria varias pastas, uma dentro da outra
novas_pastas = 'America\\Brasil\\Ilhabela'
caminho_copleto = os.path.join(pasta_pai, novas_pastas) 
os.makedirs(caminho_copleto)

caminho_existe = os.path.exists()               # Verifica se o caminho especificado existe 

diretorio_ou_arquivo = os.path.isdir()          # Verifica se caminho é diretorio ou não

arquivo_ou_diretorio = os.path.isfile()         # Verifica se o caminho é arquivo ou não

manipulador = open('arq.txt', 'x')              # Cria um arquivo
manipulador.close()                             # Fecha o arquivo

separa_extensao = os.path.splitext()            # Separa a extensao do nome do arquivo

remover = os.remove()                           # Remove o arquivo no caminho especificado 

caminho = pathlib.Path()                        # Mostra o caminho atual 
caminho.cwd()

remover_pastas = shutil.rmtree()                # Remove uma pasta no caminho especificado
'''

# Programa que renomeia varios arquivos de uma vez

os.chdir('C:\\Teste')
print(f'Diretório atual: {os.getcwd()}')

padrao_nome = input('Qual o padrao de nomes de arquivos a usar? (sem a extensao) ')

for contador, arq in enumerate(os.listdir()):
    if os.path.isfile(arq):
        nome_arq, exten_arq = os.path.splitext(arq)
        nome_arq = padrao_nome + ' ' + str(contador)
        nome_novo = f'{nome_arq}{exten_arq}'
        os.rename(arq,nome_novo)
print(f'\nArquivos renomeados')
















