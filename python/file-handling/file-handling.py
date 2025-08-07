import os

try:
    f = open("things.txt", "x")
    f.close()
except:
    print("The file scripts exist")
else:
    print("Todo funcionando correctamente")

with open("scripts.txt", "a") as f:
    f.write("My things")

with open("scripts.txt") as f:
    print(f.read())

