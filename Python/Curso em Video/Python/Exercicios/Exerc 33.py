 #Faça um programa que leia três números e mostre qual é o maior e qual é o menor.
valor1 = float(input('Primeiro valor: '))
valor2 = float(input('Segundo valor: '))
valor3 = float(input('Terceiro valor: '))
valores = [valor1, valor2, valor3]
maior = menor = valor1
for c in valores:
   if c < menor:
      menor = c 
   if c > maior:
      maior = c
print(f'O menor valor digitado foi {menor:.0f}')      
print(f'O maior valor digitado foi {maior:.0f}')   