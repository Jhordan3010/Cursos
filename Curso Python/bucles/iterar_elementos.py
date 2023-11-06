animales = {"gato","perro","loro","cocodrilo"}
numeros = {52,16,14,72}

#recorriendo la conjunto animales
# for animal in animales:
#     print(f'Ahora la variable animales es: {animal}')

#recoriendo la conjunto numeros y multiplicandola por 10
# for numero in numeros:
#     resultado = numero *10
#     print(resultado)

#iterando dos conjuntos del mismo tamaño al mismo tiempo
for animal,numero in zip(animales,numeros):
    print(f'recorriendo conjunto 1: {animal}')
    print(f'recorriendo conjunto 2: {numero}')



#forma correcta de recorer una conjunto con un indice
for num in enumerate(numeros):
    indice = num[0]
    valor = num[1]
    print(f'el indice es: {indice} y el valor es: {valor}')

#usando el else
for numero in numeros:
    print(f'ejecutando el ultimo bucle, valor actual: {numero}')
else:
    print("el bucle termino")

#todo lo anterior funciona exactamente igual para tuplas y listas