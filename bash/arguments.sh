#! /bin/bash
# $@ recibe la cantidad que sea de argumentos $# imprime la cantida de argumentos que le pases
#echo $@
#echo $#
args=("$@")
echo "Result: ${args[0]} - ${args[1]} -  ${args[2]}"
