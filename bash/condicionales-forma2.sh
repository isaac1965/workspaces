#! /bin/bash

echo "Ingresa un valor"
read age

if (( age >= 10 ))
then 
    echo "El numero es mayor"
elif (( age == 9 ))
 then
    echo "Casi eres un adulto" 
else
    echo "El numero no es mayor"
fi
