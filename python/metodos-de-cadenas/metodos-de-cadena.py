# upper() para convertir a Mayuscula
# lower() para convertir a Minuscula
# capitalize() convierte la primera letra de la palabra a Mayuscula
# find() Busca cadenas dentro de otras cadenas devuelve la posicion en la que se encuentra el string pasado
# si find() no consigue el valor pasado devuelve -1
# inder() Busca una cadena dentro de otra  funciona igual que le find() difencia del find() que devuelve -1 
# cuando no consigue un valor inder() devuelve una excepcion en vez de un -1 como lo hace find()
# isnumeric() si es numerico devolvemos True en caso contrario devuelve False
cadena1 = "Hola soy Isaac"
cadena2 = "Hola soy Cristal"
cadena3 = "hola lulys"
cadena4 = "hola mundo como estas"
valor = "58"

# Convierte a Mayuscula
resultado1 = cadena1.upper()
# resultado1 = "hola isaac como estas".upper() # Se puede hacer asi tambien

#Convierte a Minuscula
resultado2 = cadena2.lower()

#Convierte la primera letra a Mayuscula
resultado3 = cadena3.capitalize()


# Busca cadenas dentro de otras cadenas find()
resultado4 = cadena4.find("hola")
# Tambien busca cadenas dentro de otras cadenas index()
resultado5 = cadena4.index("hola")
resultado6 = valor.isnumeric()

print(resultado1)
print(resultado2)
print(resultado3)
print(resultado4)
print(resultado6)