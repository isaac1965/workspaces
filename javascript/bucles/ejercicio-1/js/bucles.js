/* Bucle con break  llega al valor indicado y luego se sale*/
//for(i= 0; i <= 10; i++){
    //document.write(i + "<br>");
    //if( i == 5 ){
       //break; 
    //}
//}


/* Bucle con continue  salta el valor indicado y continua*/
//for(let i=0; i< 10; i++){
    //document.write(i + "<br>");
    //if (i == 6 ){
        //continue;
    //}
//}

let nombres = ["Isaac", "Cristal", "Lulys", "Fran"];

 //for in muestra el valor de la posicion del arreglo

for ( let nombre in  nombres ){
    document.write(nombre + "<br>");
}

/*for of muestra la posicion en el arreglo*/
document.write("<br>");

for (let nombre of nombres) {
    document.write(nombre + "<br>");
    document.write("<br>");
}

//filter() un bucle de javascript
let words = ["numeros", "matematicas", "fracciones", "ecuaciones", "pala"]; 
resultado = words.filter(word => word.length > 5 );
 document.write(resultado);
