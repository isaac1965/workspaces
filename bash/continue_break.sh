#! /bin/bash

# para que se salte elementos continue  y el BREAK para que termine el bucle
for (( i=0; i<10; i++ ))
do
    if [ $i -eq 5 ] || [ $i -eq  7 ]
    then
        continue
    fi
    echo $i
done
