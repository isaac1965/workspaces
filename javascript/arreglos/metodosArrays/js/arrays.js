//pop() imprime el ultimo elmento de un array
//shitf() elimina el primer elmento de un array
//push(); agrega un elemento al final de un arreglo, se pueden agregar mas de uno
//reverse() invierte el orden de los numeros
//unshift() agrega elementos al principio de un array, pueden ser mas de unos
//sort(); ordena numeros de menor a mayor y letras en orden alfabetico
//splice() indicar la posicion donde iniciar a eliminar un elemento y donde terminara de eliminar
//join(); convierte un array a una cadena de texto con la particularidad de que puedes agregar separadores
//slice(); elimina elementos de un array sin sin incluir el ultimo que se especifica
// concat() El método se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
let nombre = ["isaac", "cristal", "lulys"];
document.write(nombre + "<br>");
//pop() imprime el ultimo elmento de un array
let resultado = nombre.pop();
document.write(resultado + "<br>");
document.write(nombre + "<br>");
//shitf() elimina el primer elmento de un array
let frutas = ["manazana", "pera", "uva"];
document.write(frutas + "<br>");
let resultado2 = frutas.shift();
document.write(resultado2 + "<br>");
document.write(frutas + "<br>");
//push(); agrega un elemento al final de un arreglo, se pueden agregar mas de uno
let animales = ["leon", "cebra", "caballo"];
document.write(animales + "<br>");
let resultado3 = animales.push("jirafa", "asno");
document.write(animales + "<br>");
//reverse() invierte el orden de los numeros
let numeros = [1,2,3,4,5];
document.write(numeros + "<br>");
let resultado4 = numeros.reverse();
document.write(resultado4 + "<br>");
//unshift() agrega elementos al principio de un array, pueden ser mas de unos
let resultado5 = numeros.unshift(40,50);
document.write(resultado5 + "<br>");
document.write(numeros + "<br>");
//sort(); ordena numeros de menor a mayor y letras en orden alfabetico
let numeros1 = [5,9,8,3,7];
let letras = ["a","z", "b", "k", "w", "j"];
numeros1.sort();
letras.sort();
document.write(numeros1 + "<br>");
document.write(letras + "<br>");
//splice() indicar la posicion donde iniciar a eliminar un elemento y donde terminara de eliminar (modifica el arregl inicial)
let letras1 = ["a", "b", "c", "d", "e", "f", "g"];
letras1.splice(1,3, "isaac", "cristal", "lulys");
document.write(letras1 + "<br>");
//join(); convierte un array a una cadena de texto con la particularidad de que puedes agregar separadores
let palabras = ["cristal", "casa", "empresa", "pais"];
let resultado6 = palabras.join(" - ");
document.write(resultado6 + "<br>");
//slice(); elimina elementos de un array sin sin incluir el ultimo que se especifica
let words = ["casa", "mansion", "apartamento", "pethouse", "rancho"];
let resultado7 = words.slice(0,2);
document.write(resultado7 + "<br>");
// El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
let nombres = ["Isaac", "Enrrique", "Maldonado", "Ampies", "Cristal", "Betzabeth", "Lulyz", "Zunilda", "Fran", "Leon "];
let edades = [27, 25, 57, 60];
let frutasss = ["naranjas", "manzanas", "duraznos"];
let resultado34 = nombres.concat(edades,frutasss);
document.write(resultado34);
