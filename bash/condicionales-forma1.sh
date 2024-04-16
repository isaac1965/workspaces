#! /bin/bash
# -eq --> ==  -lt --> < |  -gt --> > | -ge --> >= | -le --> <=
echo "Ingresa un valor: "
read age
if [ $age -ge 10 ]
then 
    echo "El numero es mayor a 10"
else
    echo "El numero es menor a 10"
fi

