const content = document.querySelector(".contenedor");
//createElement(); Crea un elemento tag
//let item2 = document.createTextNode("Esto es un li");
const fragmento = document.createDocumentFragment();
//appendChild(); para agregar un elemento hijo
//item.appendChild(item2);
//Mostrando mas de un elemento
for(i=0; i< 20; i++){
    let item = document.createElement("LI");
    item.innerHTML = "esto es un nannanandfas";
    fragmento.appendChild(item);
}
const box = document.querySelector(".content-box");
//obtencion y eliminacion de elementos child
//firstChild obtencion del primer elemento, cuenta espacios en blanco
//lastChild cuenta espacios en blanco tambien
//firstElementChild No cuenta espacios en blanco
//lastElementChild No cuenta espacion en blanco
//childNodes devuelve todos los nodos hijos tambien cuenta los espacios en blanco
//children devuelve todos los nodos hijos, pero no cuenta los espacaion en blanco
content.appendChild(fragmento);
let h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "titulo";
let h2_antiguo = document.querySelector(".h2");
//replaceChild(); reemplaza un elemento hijo
box.replaceChild(h2_nuevo, h2_antiguo);
let parrafo_antiguo = document.querySelector(".parrafo");
//removeChild(); Remueve etiquetas creadas en html manualmente
//box.removeChild(h2_nuevo);
//hasChildNodes(); verifica si el elemento tiene hijos adentro
let box1 = box.hasChildNodes();
if(box1){
    document.write("tiene elementos hijos");
}else{
    document.write("No tiene elemento hijos");
}
//parentElement devuelve el elemento padre que lo contiene funciona con los node elements elementos creados por javascript
//parentNode que casi ni se usa supuestamente
console.log(h2_antiguo.parentElement);
//propiedades para siblins
const h3_nuevo = document.querySelector(".title_1"); 
box.removeChild(h3_nuevo);
