#! /bin/bash

: 'esto es un comentario de varias
lineas 
esta line es de relleno'

echo "Ingresa un nombre:"
read name

echo "Ingresa tu apellido:"
read last

echo "Ingresa tu edad"
read edad

if [ $edad -ge  18 ] && [ $edad -le 30 ]
then
echo "$name $last Puedes trabajar en este trabajo"
else
  echo "No puedes trabajar $name de uhhh "
fi
