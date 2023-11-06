diccioanrio ={
    "nombre" : 'Jhordan',
    "apellido" : 'huera',
    "edad" : 20
}

#devuelve las claves(tambien sirve para iterara)
claves= diccioanrio.keys()

#obteniendo un elemento con get()(si no encuentra nada el programa continua)
valor_nombre = diccioanrio.get("nombre")

# #elimina todo lo del diccionario
# diccioanrio.clear()

#eliminando un elemento del diccionario
diccioanrio.pop("edad")

#obteniendo un elemento dict_items iterable
diccioanrio_iterable = diccioanrio.items()

print(diccioanrio_iterable)