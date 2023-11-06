#creado diccionarios con dict()
diccionario = dict(nombre="Juan",apellido="Perez")

#las listas no pueden ser claves y usamos frozenset() para meter conjuntos
diccionario ={frozenset(["dalto","rancio"]):"jaajja"}


#creando diccionario con fromkeys() valor por defecto none 
diccionario = dict.fromkeys(["nombre","apellido"])

#creamos diccionarios con framkeys() cambia el valor por defecto a "no se"
diccionario = dict.fromkeys(["nombre","apellido"],"no se")
 


print(diccionario)