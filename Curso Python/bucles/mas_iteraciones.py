#crear listas
frutas = ["banana","manzana", "ciruelas","pera","naranja","granadilla","durazno"]
cadena = "hola como estas"
numeros = [2,5,8,10]

#evitando que se coma una manzana con la sentencia continue
for fruta in frutas:
    if fruta == "manzana":
        continue
    print(fruta)

print()

#ecitar que el bucle siga ejecutandoce
for fruta in frutas:
    print(fruta)
    if fruta == "pera":
        break

#recorrer una cadena de texto
for letra in cadena:
    print(letra)

#for en una sola linea de codigo(duplicamos los numeros)
numeros_duplicado = [x*2 for x in numeros]
print(numeros_duplicado)

