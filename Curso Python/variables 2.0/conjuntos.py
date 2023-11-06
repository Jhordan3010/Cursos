#creando un conjunto con set()
conjunto = set(["dato 1","dato 2"])

#introducir un conjunto dentro de otro conjuntro
conjunto1 = frozenset(["dato 1", "dato 2"])
conjunto2 = {conjunto1, "dato 3"}

print(conjunto2)

#Teoria de conjuntos 
conjunto1 = {1,3,5,7}
conjunto2 = {2,4,6,9}

#verifica si es un subconjunto
resultado = conjunto2.issubset(conjunto1)
resultado = conjunto2 <= conjunto1

#verifica si es un superconjunto
resultado = conjunto2.issuperset(conjunto1)
resultado = conjunto2 > conjunto1

#verificar si hay un numero en comun
resultado = conjunto2.isdisjoint(conjunto1)

print(resultado)