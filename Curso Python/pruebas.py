import calendar
yy = 2023
mm = 12

print(calendar.month(yy,mm))

contraseña_correcta = "contraseña"
intentos_maximos = 2

for intento in range(intentos_maximos):
    contraseña_ingresada = input("Ingrese la contraseña: ")

    if contraseña_ingresada == contraseña_correcta:
        print("¡Contraseña correcta! Acceso concedido")
        break
    else:
        intento_restantes = intentos_maximos - (intento + 1)
        print(f'Contraseña incorrecta. Te quedan {intento_restantes} intentos.')
else:
    print("Has excedido el numero maximo de intentos. Acceso denegado")