#Creando una lista con list()
lista = list([20,True])

#devuelve la cantidad de elementos de la lista 
cantidad_elementos = len(lista)

#agregando un elemento a la lista 
lista.append(96542255)

#agregando un elemento a la lista en un indice especifico
lista.insert(2, 964070260)

#agregando varios elementos a la lista
lista.extend([False,2002])

#eliminando unelemento de la lista por su indice
lista.pop(3) #-1 par aelminar el ultimo, -2 para eliminar el anteultimo, y asi sucesivamente 

#removiendo un elemento de la lista por su valor
lista.remove(964070260)

#ordenando la lista de forma ascendente(si usamos el paramero reverse=True lo ordena en reversa)
#lista.sort()

#invirtiendo los elementos de una lista 
lista.reverse()

#verificando si un elemento se encuentra en la lista 
elemento_encontrado = lista.index(True)



#eliminando todos los elementos de la lista
#lista.clear()

print(lista)
print(dir(lista))