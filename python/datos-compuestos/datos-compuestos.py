# Creando un  tipo de dato compuesto lista, LOS DATOS DE LA LISTA SE PUEDEN MODIFICAR

lista = ["isaac maldonado",True,27]

lista[0] = "Cristal Maldonado" # Esto si es valido con las listas
print(lista[0]) 

# Creado un tipo de dato compuesto tupla, LOS DATOS "NO"  SE PUEDEN MODIFICAR, LAS TUPLAS VAN ENTRE PARENTESIS

tupla = ("fran maldonado",False,75)

# tupla[2] = True --> esto no es valido con las tuplas
# print(tupla[2])

# Creando un tipo de dato compuesto set{} TAMPOCO SE PUEDEN MODIFICAR SUS ELEMENTOS - no se puede llamar 
# a sus elementos por sus indices PERO SI SE PUEDEN REDEFINIR COMPPLETAMENTE
# Y no se puede acceder al indice [1] Otra caracteristica no deja repetir valores

conjunto = {"lulys ampies",True,63,"lulys ampies"} 

# conjunto[2] = False # Esto no es valido con conjuntos o set

print(conjunto)

# Creando un diccionario

diccionario = {
    'nombre' : "Isaac Maldonado",
    'edad' : 27,
    'trabajo': "Vigilante",
    'altura': 1.85,
    'dato_duplicado': "Soy Isaac"
}
print(diccionario['altura'])