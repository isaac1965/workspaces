#! /bin/bash

echo "Enconge entre el valor 1 y 2: "
read valor

case $valor in 
    1)
        echo "Escogistes la primera opcion"
        ;;
    2)
        echo "Escogistes la segunda opcion"
        ;;
    *)
        echo "Valor no encontrado"
        ;;
    esac
