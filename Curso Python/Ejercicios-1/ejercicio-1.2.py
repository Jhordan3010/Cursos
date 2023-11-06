frase = input("Dime una frase y te calculo cuanto te demoras en decirla: ")
palabras_separadas = frase.split(" ")
cantidad_de_palabras = len(palabras_separadas)
print(f'Dijiste {cantidad_de_palabras} palabras, y tardaste {cantidad_de_palabras/2} segundos en decirlo')
if cantidad_de_palabras > 120:
    print("muchas palabras")