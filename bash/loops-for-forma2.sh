#! /bin/bash
# i+=20 para que vaya de 20 en 20 & i++ va el bucle de uno en uno 
for (( i=0; i < 100; i+=2 ))
do
    echo $i
done
