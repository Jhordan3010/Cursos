numeros = [4,7,1,42,15]

#encontrando el numeo mayor de una lista
numero_mas_alto = max(numeros)
print(numero_mas_alto)

#encontrando el numeo menor de una lista
numero_mas_bajo = min(numeros)
print(numero_mas_bajo)

#redondeando a 6 decimales
numero =round(12.345678,2)
print(numero)

#reortana False -> 0, vacio, False, None \ True -> distino a 0, True, cadena, datos mo vacios
resultado_bool = bool(9)
print(resultado_bool)

#return True, si todos los valores son verdaderos
resultado_all = all([None,"true", [344,240]])
print(resultado_all)

#suma todos los valores de un iterable
suma_total = sum(numeros)
print(suma_total)

#4.17