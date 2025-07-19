from PIL import Image, ImageDraw, ImageFont
import os

# Lista de textos a serem adicionados nas imagens
textos = [
    "137", "45", "185", "12", "67", "150", "89", "3", "172", "104", "56", "2", "183", "91", "77", "35", "118", "9", 
    "142", "27", "65", "180", "50", "119", "164", "32", "11", "97", "138", "5", "154", "72", "83", "33", "160", "25",
    "146", "94", "129", "7", "171", "59", "41", "20", "191", "86", "141", "124", "68", "15"
]

# Caminho da imagem base
caminho_imagem = "minha_imagem.jpg"

# Criar a pasta de saída, se não existir
pasta_saida = "imagens_editadas"
os.makedirs(pasta_saida, exist_ok=True)

# Tentar carregar a fonte
try:
    fonte = ImageFont.truetype("arial.ttf", 100)  # Ajuste o tamanho conforme necessário
except OSError:
    print("Fonte Arial não encontrada. Usando a fonte padrão do Pillow.")
    fonte = ImageFont.load_default()

# Verificar se a imagem base existe antes de iniciar o loop
if not os.path.exists(caminho_imagem):
    print(f"Erro: A imagem '{caminho_imagem}' não foi encontrada.")
else:
    # Loop para gerar as imagens editadas
    for i, texto in enumerate(textos, start=1):
        # Abrir a imagem base
        imagem = Image.open(caminho_imagem).convert("RGB")  # Converter para RGB para evitar erro ao salvar JPEG
        desenho = ImageDraw.Draw(imagem)
        
        # Definir a posição e a cor do texto
        posicao = (500, 620)  # Coordenadas (x, y)
        cor = (144, 153, 127)  # Cor do texto
        
        # Adicionar o texto na imagem
        desenho.text(posicao, texto, fill=cor, font=fonte)
        
        # Definir as coordenadas para o corte (corte central quadrado)
        largura, altura = imagem.size
        tamanho_corte = min(largura, altura)
        left = (largura - tamanho_corte) // 2
        upper = (altura - tamanho_corte) // 2
        right = left + tamanho_corte
        lower = upper + tamanho_corte
        
        # Cortar e redimensionar a imagem
        imagem_cortada = imagem.crop((left, upper, right, lower))
        imagem_final = imagem_cortada.resize((1080, 1080), Image.Resampling.LANCZOS)
        
        # Salvar a imagem editada
        caminho_saida = os.path.join(pasta_saida, f"imagem_editada_{i}.jpg")
        imagem_final.save(caminho_saida, format="JPEG")  # Especificar o formato JPEG
        
        print(f"Imagem {i} salva com sucesso em: {caminho_saida}")
