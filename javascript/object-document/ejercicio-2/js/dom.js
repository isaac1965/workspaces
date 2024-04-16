const box = document.querySelector(".content-box");
const title = document.querySelector(".title_1");
//removeChild(); remueve o elimina un elemento hijo
box.removeChild(title);
const titulo = document.querySelector(".title_2"); 
//nextElementSibling indica cual es el siguiente elemento hermano que le sigue si existe 
console.log(titulo.nextElementSibling);
const titulo1 = document.querySelector(".title_3");
//previousElementSibling indica cual es el elemento hermano siguiente si existe
console.log(titulo1.previousElementSibling);
//nextSibling hace los mismo que nextElementSibling, la diferencias es que cuenta espacios en blanco como texto
console.log(titulo.nextSibling);
//previousSibling hace los mismo que previousElementSibling, la diferencias es que cuenta espacios en blanco como texto
console.log(titulo1.previousSibling);
