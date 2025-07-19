import requests
from bs4 import BeautifulSoup

def obter_promocao_promobit():
    url = "https://www.promobit.com.br/"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.7151.69 Safari/537.36"
    }
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        return None

    soup = BeautifulSoup(response.text, "html.parser")

    # Procurar todos os links <a> cujo href começa com /oferta/
    ofertas = soup.select('a[href^="/oferta/"]')

    if not ofertas:
        return None

    primeira = ofertas[0]

    # Título pode estar dentro do link, geralmente em uma tag <h3>, <span> ou similar
    titulo_tag = primeira.find(["h3", "span", "div"])
    titulo = titulo_tag.text.strip() if titulo_tag else "Promoção"

    # O preço pode estar em um span ou div dentro do link com alguma palavra "price" ou similar
    # Como não temos HTML completo, vamos tentar achar um texto numérico (ex: R$ 1.234,56)
    preco = None
    for tag in primeira.find_all():
        texto = tag.get_text()
        if "R$" in texto:
            preco = texto.strip()
            break

    link = "https://www.promobit.com.br" + primeira["href"]

    if preco:
        return f"🔥 Promoção:\n{titulo} por {preco}\nVeja aqui: {link}"
    else:
        return f"🔥 Promoção:\n{titulo}\nVeja aqui: {link}"
