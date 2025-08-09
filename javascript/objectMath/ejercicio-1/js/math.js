//sqrt() devuelve la raiz cuadrada de un numero, y cbrt() devuelve la raiz cubica de un numero
//cbrt() devuelve la raiz cubica;
// max()
// min()
// random()
// round() redondea hacia abajo
// ceil()redondea hacia arriba
// floor()
// trunc()
// PI (PI tambien se usa sin parentesisi)
// SQRT_1_2 (Se usa sin parentesis porque solo se utiliza para obtener un valor)
// SQRT2(Se usa sin parentesis porque solo se utiliza para obtener un valor)
//E constante de euler (se usa sin parentesis)
//LN2 logaritmo neperiano de 2; (se usan sin parentesis)
//LN10 logaritmo neperiano de 10; (se usan sin parentesis)
//LOG2E logaritmo con base 2 de euler (se usan sin parentesis)
//LOG10E logaritmo con base 10 de euler (se usan sin parentesis)

let resultadoSq = Math.sqrt(25);
document.write(`SQRT: ${resultadoSq}` + "<br>");
document.write("<br>");
let resultadoCb = Math.cbrt(25);
document.write(`CBRT: ${resultadoCb}` + "<br>");
//max(); devuelve el numero maximo;
numero = Math.max(1,3,5,6,7);
document.write(`Devuelve el numero maximo: ${numero}`);
//min(); devuelve el numero mas pequeño 
numero1 = Math.min(1,3,5,6,7);
document.write("<br>");
document.write(`Devuelve el numero minimo: ${numero1}` + "<br>");
//random() devuelve un numero aleatorio entre 0 y 1 con decimales;
//let resultado = Math.random() * 10; 
let randomNumber = (numB) => {
    
    return Math.trunc(Math.random() * numB);
}

let resultadoRandomNumber = randomNumber(20);
document.write(resultadoRandomNumber);


//round(); redondea el numero al mas cecano 4.7 sera igual a 5 y 4.4 = 4
let numero2 = Math.round(resultado);
document.write(numero2 + "<br>");
let resultado1 = Math.random() * 9; 
//floor(); si se le pasa un numero con decimales devuelve el numero entero;
let numero3 = Math.floor(resultado1 + 1);
document.write(numero3 + "<br>");
//trunc(); elimina decimales sin mas ni mas;
let resultado2 = Math.trunc(9.9);
document.write(resultado2 + "<br>");
//PI(); muestra el valor de pi
let pi = Math.PI;
document.write(pi + "<br>");
//SQRT1_2 raiz cuadrada de un medio
let sq = Math.SQRT1_2
document.write(`raiz cuadra de <b style="font-size:20px;">1/2</b>: ${sq}` + "<br>");
//SQRT2 raiz cuadrada de 2
let sq2 = Math.SQRT2;
document.write(`raiz cuadrada de <b style="font-size:20px">2</b>: ${sq2}` + "<br>");
//E constante de euler
let euler = Math.E
document.write(`constante de <b style="font-size:20px;">euler</b>: ${euler}` + "<br>");
//LN2 logaritmo neperiano de 2;
let ln2 = Math.LN2;
document.write(`Logaritmo nerperiano de <b style="font-size:20px;">2</b>: ${ln2}` + "<br>");
//LN10 logaritmo neperiano de 10;
let ln10 = Math.LN10;
document.write(`Logaritmo nerperiano de <b style="font-size:20px;">10</b>: ${ln10}` + "<br>");
//LOG2E logaritmo con base 2 de euler
let log2e = Math.LOG2E;
document.write(`Logaritmo con base <b style="font-size:20px;">2</b> de euler: ${log2e}` + "<br>");
//LOG10E logaritmo con base 10 de euler
let log10e = Math.LOG10E;
document.write(`Logaritmo con base <b style="font-size:20px;">10</b> de euler: ${log10e}` + "<br>");
let potencia = Math.pow(10,2);
document.write(potencia);

