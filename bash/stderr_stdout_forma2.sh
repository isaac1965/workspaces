#! /bin/bash
#Guada la salida y el error en el mismo archivo || ls >archivo.txt guarda todas las salidas del comando ls o del que sea
ls -123 >archivo.txt 2>&1
