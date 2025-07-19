# Set

planeta_anao = {'Plutão', 'Ceres', 'Eris', 'Haumea', 'Makemake'}


print(type(planeta_anao))

print(len(planeta_anao))

print('Ceres' in planeta_anao)
print('Lua' in planeta_anao)
print('Lua' not in planeta_anao)

for astro in planeta_anao:
    print(astro.upper(), end=' ')

astros = ['Lua', 'Vênus', 'Sirius', 'Marte', 'Lua']
print(astros, end=' ')
astros_set = set(astros)
print()
print(astros_set)

astros1 = {'Lua', 'Vênus', 'Sirius', 'Marte', 'Lua'}
astros2 = {'Lua', 'Vênus', 'Marte', 'Lua', 'Cometa Harley'}
astros1.add('Sol')
astros1.remove('Sol')
astros1.discard('Lua')
astros1.pop()
print(astros1 == astros2)
print(astros1 | astros2 )
print(astros1.union(astros2))
print(astros1 & astros2)
print(astros1.intersection(astros2))
print(astros1 ^ astros2)
print(astros1.symmetric_difference(astros2))
astros1.clear()