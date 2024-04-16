#! /bin/bash

echo "Introduzca un password"
read pass
echo "Repita el password"
read pass2

if [ pass == pass2  ]
then 
    echo "Las contrasenas son iguales"
else
    echo "Las contrasenas no son iguales"
fi
