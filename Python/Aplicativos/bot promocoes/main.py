from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
from webdriver_manager.chrome import ChromeDriverManager

# Configurações do Chrome
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--no-sandbox")
options.add_argument("--remote-debugging-port=9222")

# Inicia o navegador
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Acessa o WhatsApp Web
print("Abrindo WhatsApp Web... Escaneie o QR Code.")
driver.get("https://web.whatsapp.com")

# Aguarda o usuário logar (tempo inicial)
print("Aguardando login no WhatsApp...")
time.sleep(10)

# Tenta achar o campo de busca por até 60 segundos
max_tentativas = 12
tentativa = 0
campo_busca = None

while tentativa < max_tentativas:
    try:
        campo_busca = driver.find_element(By.XPATH, "//div[@role='textbox']")
        print("Campo de busca localizado!")
        break
    except:
        tentativa += 1
        print(f"Tentativa {tentativa}: ainda aguardando login...")
        time.sleep(5)

if campo_busca:
    contato = "Denguinha"
    try:
        campo_busca.click()
        time.sleep(1)
        campo_busca.send_keys(contato)
        time.sleep(3)

        contato_encontrado = driver.find_element(By.XPATH, f"//span[@title='{contato}']")
        contato_encontrado.click()
        print(f"Contato '{contato}' encontrado e selecionado!")
    except Exception as e:
        print("Erro ao tentar encontrar o contato:", e)
else:
    print("Campo de busca não localizado. Verifique se o login foi feito corretamente.")

# Manter o navegador aberto (opcional)
# driver.quit()
