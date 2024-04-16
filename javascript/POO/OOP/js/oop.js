class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie} y tengo ${this.edad} año y soy de color ${this.color}`;
    }
    Verinfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
     set setRaza(newName){
         this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro", "1", "gris", "pitbull");
const gato = new Animal("gato", "4", "negro");
const pajaro = new Animal("pajaro", "2", "verde");
//document.write(perro.info + "<br>");
//document.write(gato.info + "<br>");
document.write(perro.getRaza + "<br>");
perro.setRaza = "doberman";
Perro.ladrar();
gato.Verinfo();
pajaro.Verinfo();
