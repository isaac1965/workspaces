// El objecto window hereda el eventTarget(e)
// let abriFace = 'https://facebook.com/'
// open() abre una ventana
// close() cierra una ventana
// closed() devuelve un valor booleano si la ventana esta abierta=false cerrada=true 
// stop() detiene la carga de la pagina
// alert() un alert comun en javascript
// print() Nos deja imprimiri con javascript
// prompt() Nos pide un dato y tambien viene del object window
// confirm() ventana que pregunta si y no
// window.screen es un objecto y el screen se usa sin () muestra las dimensiones de la pantalla actual
// window.screenLeft devuelve la distancia horizontal del borde de la pantalla y la ventana
// window.screenTop devuelve la distancia vertical del borde de la pantalla y la ventana
// window.scrollX
// window.scrollY
// window.scroll desplaza la ventana actual a un lugar particular en el documento(x,y)
// window.open(abriFace);
// window.resizeBy() cambia el tamano de la ventana actual (funciona desde un server) "casi ni se usa"
// window.resizeTo() redimensiona dinamicamente la ventana (funciona desde un server) "case ni se usa"
// window.moveBy() Mueve la ventana en una ubicacion relativa
// window.moveTo() Mueve la ventana en una ubicacion absoluta
// objetos barprop: -locationbar -menubar -personalbar -scrollbars -statusbar -toobar "casi ni se usa"
// Location:
// window.location.href (devuelve el href (URL) de la pagina actual)
// window.location.hostname (devuelve el nombre de dominio del servidor web)
// window.location.pathname (devuelve la ruta y el nombre del archivo de la pagina actual)
// window.location.protocol (devuelve el protocolo web utilizado (http o https))
// window.location.assign("https://youtube.com")  (carga un nuevo documento)
let screenleft = window.screenLeft;
let screentop = window.screenTop;
document.write(`Left:${screenleft} Top:${screenTop}</br>`);
let screenwidth = window.screen.width;
let screenheight = window.screen.height;
let scrollx = window.scrollX;
let scrolly = window.scrollY;
let href = window.location.hostname

document.write(`Width screen:${screenwidth}p Height screen:${screenheight}p</br>`);
alert(`Scroll en X:${scrollx}, Scroll en Y:${scrolly}`);
console.log(window.screen);
document.write(`URL del archivo: ${href}`);
