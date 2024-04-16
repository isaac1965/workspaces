/* Bucle con break  llega al valor indicado y luego se sale*/
for(i= 0; i <= 10; i++){
    document.write(i + "<br>");
    if( i == 3 ){
       break; 
    }
}

document.write("<br>");

/* Bucle con continue  salta el valor indicado y continua*/
for(let i=0; i< 10; i++){
    if (i == 5 ){
        continue;
    }
    document.write(i + "<br>");
}

document.write("<br>");

let array = ["hola", "como", "estas"];
 
for(i=0; i <= 2; i++){
    document.write(array[i] + "<br>");
}
