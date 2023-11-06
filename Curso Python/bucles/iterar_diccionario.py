diccionario ={
    "nombre": "Jhordan",
    "apellido": "Huera",
    "edad": 20
}

#recorriendo el diccionario para obtene  las claves
for key in diccionario:
    print(key)

for key in diccionario.items():
    print(key)

#recorriendo diccionario con item() para obtener las claves y el valor 
for datos in diccionario.items():
    key = datos[0]
    value = datos[1]
    print(f"la clave es {key} y el valor es : {value}")