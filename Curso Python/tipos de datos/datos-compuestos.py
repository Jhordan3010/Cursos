#Creando una lista (se puede modificar)
lista = ["Jhordan","Marcelo",True,1.78]

#Creando una tupla(no se puede modificar)
tupla = ("Jhordan","Marcelo",True,1.78)

#esto es valido 
# lista[3] = "Esteban"

# esto no 
#tupla[3] = "Esteban"

#Creando un conjunto set( no se acccede a elementos por indice, no almacena datos duplicados)
conjuto = {"Jhordan","Marcelo",True,1.78,True,"Jhordan"}
#print(conjuto[3])->no puede acceder al elemento

#Creando un diccionario (dict)(la estructura es key : value y separamos con comas)
diccionario =  {
    #clave :  valor
    'nombre': "Jhordan",
    'Instagram' : "Jhordan_Huera",
    'esta_emocionado': True,
    'altura': 1.78 ,
    'dato_duplicado' : "Jhordan"
}
# print(diccionario[clave])
print(diccionario['altura'])
print(lista[3])
