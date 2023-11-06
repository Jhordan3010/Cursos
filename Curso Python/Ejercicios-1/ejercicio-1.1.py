#Promedio de duracion
otros_cursos_min = 2.5
otros_cursos_max = 7
otros_cursos_promedio = 4
dalto_cursos = 1.5

#Diferencia de duracion 
diferencia_con_min = round(100 - (dalto_cursos / otros_cursos_min) * 100,2)
diferencia_con_max = round(100 - (dalto_cursos * 1000 // otros_cursos_max) / 10,2)
diferencia_con_promedio =round( 100 - (dalto_cursos / otros_cursos_promedio) * 100,2)

#Duracion de crudos o videos sin editar
crudo_promedio = 5
crudo_dalto = 3.5

#Calcular el porcentaje del tiempo vacio removido
tiempo_vacio_promedio = 100 - otros_cursos_promedio * 1000 // crudo_promedio / 10
tiempo_vacio_dalto = 100 - dalto_cursos * 1000 // crudo_dalto / 10

#Mostrando la diferencia de duracion (ejercicio A)
print("--------------------------------")
print("El curso de dalto dura:")
print(f'- un {diferencia_con_min}% menor que el mas rapido')
print(f'- un {diferencia_con_max}% menor que el mas lento')
print(f'- un {diferencia_con_promedio}% menor que el mas promedio')
print("--------------------------------")

#Mostarando la cantida de espacio vacio que se remuve (ejercicio B)
print(f'Un curso promedio elimina un {tiempo_vacio_promedio}% de tiempo vacio')
print(f'El curso de Dalto elima el {tiempo_vacio_dalto}% de tiempo vacio')
print("--------------------------------")


#Mostrar diferencia si los cursos duran 10 horas
print(f'Ver 10 horas de este curso equivale a ver {otros_cursos_promedio * 100 // dalto_cursos / 10 } horas de otros cursos')
print(f'Ver 10 horas de otros cursos equivale a ver {dalto_cursos *100 // otros_cursos_promedio /10} horas de otros cursos')
print("--------------------------------")