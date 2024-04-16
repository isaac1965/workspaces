////funciones anonimas en javascript
//const suma1 = function(num1, num2){
    //let res= num1 + num2;
    //return res;
//}

//let resultado1 = suma1(14,5);
//document.write(resultado1);

//const saludo = function(saludo){
    //document.write(`Hola como estas <b>${saludo}</b> <br>`);
//}
//saludo("Isaac");

//funciones normales en javacscript

//function suma(n1, n2){
    //let res= n1 + n2;
    //return res;
//}
//let resultado = suma(5,7);
//document.write(resultado);

//funciones tipo arrow o fleclas forma 1
//const saludar = (nombre) => {
    //document.write("Hola como estas? " + nombre);
//}

//saludar("isaac");

//funciones tipo arrow o fleclas forma 1
let suma = (a,b) => a+b;
let resultado = suma(7,8);
document.write(`${resultado}<br>`);

//funciones tipo arrow o fleclas forma 2 si solamente se pasa una variable no es necesario colocarle los parentesis
let potencia = n => n * 2;
alert(potencia(4));
//funciones tipo arrow o fleclas forma 3 si a la funcion no se va a pasar ningun argumento obligatoriamente se le tiene que poner los parentesis
let saludando = () => alert("Hello World from Javascript");
saludando();
//funciones arrow o fleclas "MULTILINEA" forma 3 si a la funcion no se va a pasar ningun argumento obligatoriamente se le tiene que poner los parentesis
let op = (x,y) => {
    let result = x * y;
    return result;
}
let resultado1 = op(5,9);
document.write(resultado1);
