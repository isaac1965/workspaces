// typeof convierte valores boolean a string cadenas de numero reales a numeros etc....!!!
let value = true;
alert(typeof value);
// Conversion a Strings 
value = String(value);
alert(typeof value);

let str = "123"
alert(typeof str);
// Conversion a numeros
let num = Number(str);
alert(typeof num);

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, falla la conversion, porque tiene que ser un numero real que este entre las comillas

// Conversion Booleana

alert( Boolean (1)) // Devuelve como resultado true
alert(Boolean (0)) // Devuelve como resultado false
alert(Boolean ("0")) // Devuelve como resultado true, PHP lo interpreta como false, pero en javascript es true
alert(Boolean (" ")) // Devuelve como resultado true, los espacios en blanco tambien cuentan 

