cadena1 = "hola,soy,Jhordan"
cadena2 = "Bienvenido"
# DIR - devuelve la lista de atributos válidos del objeto pasado.
        #print(dir(4))
# UPPER - convierte a mayuscula
mayusc = cadena1.upper()
# LOWER - convierte a minuscula
minisc = cadena2.lower()
# CAPITALIZE - primera en mayuscula
primera_letra_mayusc = cadena1.capitalize()



# FIND - método encuentra la primera aparición del valor especificado, sino devuelve -1
busqueda_faid = cadena1.find("y")
# INDEX - método encuentra la primera aparición del valor especificado, sino devuelve una excepción
busqueda_index = cadena1.index("h")


# ISNUMERIC - si es numerico devuelve true
es_numerico = cadena1.isnumeric()
# ISALPHA - si es alfa numérico devuelve true
es_alfanmerico = cadena1.isalpha()


# COUNT - devuelve el número de ocurrencias de una subcadena en la cadena dada.
contar_coincidencias = cadena1.count("J")
# LEN - cuenta los caracteres de una cadena
contar_caracteres = len(cadena1)


# ENDSWITH - verifica si una cadena termina con otra cadena dada, si es asi devuelve tru
termina_con = cadena1.endswith("n")
# STARTSWITH - verifica si una cadena empiza con otra cadena dada, si es asi devuelve True
empieza_con = cadena1.startswith("H")


# REPLACE - remplaza un valor por otro
cadena_nueva = cadena1.replace(","," ")
# SPLIT - separa por el parametro dado
cadena_separada = cadena1.split(",")

print(cadena_separada[0])