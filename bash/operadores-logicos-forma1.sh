#! /bin/bash
# || operadores logicos or es igual || and &&
age=10

if [ $age -gt 18 ] && [ $age -lt 40 ]
then
    echo "La edad es valida"
else 
    echo "La edad no es valida"
fi

