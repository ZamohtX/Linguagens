larg = float(input("Largura da parede: "))
alt = float(input("Altura da parede: "))
area = larg * alt
tinta = area / 2 
print(f'Sua parede tem dimensão de {larg}x{alt} e sua área é de {area}m².')
print(f'Para pintar essa parede, você precisará de {tinta}l de tinta')