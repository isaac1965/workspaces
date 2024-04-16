class celulares {
    constructor(modelo,color,peso,resolucion,pantalla,camara,ram,info){
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.pantalla = pantalla;
        this.camara = camara;
        this.ram = ram;
        this.info = `${this.modelo} color:${this.color}, peso:{this.peso} resolucion:${this.resolucion}, pantalla:${this.pantalla}, camara:${this.camara}, ram:${this.ram}`
        this.encendido = false; 
    }
    OnOffCelular(){
        if(this.encendido == false){
        alert("celular encendido");
            this.encendido = true;
        }else{
            alert("el celular apagado");
        }
    }
    
    reiniciarCelular(){
        if(this.encendido == false){
            this.encendido = true;
            alert("Reiniciando");
        }else{
           alert("El celular esta apagado por ende no se puede reiniciar");
        }
    }
    fotosCelular(){
       alert("foto tomada: " + ${this.camara});
    }
    grabarCelular(){
        alert("video grabado: en 4k" + ${this.resolucion});
    }
    verInfo(){
        document.write(this.info);

    }

}
const celular1 = new celulares("tecno", "black", "5kg", "1920x1080", "700", "16mgp", "4");I
const celular2 = new celulares("motorola", "white", "4kg", "1920x1080", "700", "16mgp", "4");I
const celular3 = new celulares("google pixel", "mate", "3kg", "1920x1080", "700", "16mgp", "4");I

class Altagama extends celulares{
    constructor(modelo,color,peso,resolucion,pantalla,camara,ram,camaraExtra,info){
        super(modelo,color,peso,resolucion,pantalla,camara,ram,info)
        this.info = `${this.modelo} color:${this.color}, peso:{this.peso} resolucion:${this.resolucion}, pantalla:${this.pantalla}, camara:${this.camara}, ram:${this.ram}, y una camara mas.`
        
    }
    camaraLenta(){

    }
    reconocimientoFacial(){

    }
    verInfoAltaGama(){
        document.write(this.info + "<br>");
    }
}
const altagama1 = new Altagama("Iphone", "blanco", "3kg", "1920x1080", "700", "16mgp", "8");
const altagama1 = new Altagama("Samsung", "black", "3kg", "1920x1080", "700", "16mgp", "8");
const altagama1 = new Altagama("Xioami", "silver", "2kg", "1920x1080", "700", "16mgp", "8");
altagama.verInfoAltaGama();
class Apps {
    constructor(nombre,descargas,puntuacion,peso){
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
    }
    instalarApp(){
        document.write("Instalar app");
    }
    abrirApp(){
        document.write("Abrir App");
    }
    cerrarApp(){
        document.write("Cerrar app");
    }
    desinstalarApp(){
        document.write("Desinstalar app");
    }
    
}
