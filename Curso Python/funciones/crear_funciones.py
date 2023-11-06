#creando una funcion simple
#def saludar():
 #   print("Hola como estas")

#ejecutado la funcion
#saludar()

def saludar(nombre, sexo):
    sexo = sexo.lower()
    if sexo == "mujer":
        adjetivo = "mujer"
    elif sexo == "hombre":
        adjetivo = "hombre"
    else:
         adjetivo = "otro"
    print(f"Hola {nombre} eres: {adjetivo}, como estas?")

saludar("Mario", "HOMBRE")
saludar("Maria", "Mujer")
saludar("Pedro", "no binario")

#crear una funcion que me retorne valores
def creando_comtraseña_random(num):
    chars = "abcdefghij"
    num_entero = str(num)
    num = int(num_entero[0])
    c1 = num - 2
    c2 = num
    c3 = num - 5
    contraseña = f"{chars[c1]}{chars[c2]}{chars[c3]}{num*2}"
    return contraseña

password = creando_comtraseña_random(3)
frase = f"Tu contraseña es {password}"
print(frase)
