// Arreglos asociativos
let pc1 = {
    nombre: "Isaac Maldonado",
    equipo: "Asus",
    ram: "16GB",
    procesador: "Ryzen 3",
    grafica: "Integrada"
};

let nombre = pc1["nombre"];
let equipo = pc1["equipo"];
let ram = pc1["ram"];
let procesador = pc1["procesador"];
let grafica = pc1["grafica"];
let frase = `Mi nombre es <b style="color: blue;">${pc1.nombre}</b> y tengo una ram de <b style="color: red;">${pc1.ram}</b> y un procesaor <b style="color: green;">${pc1.procesador}</b>, y tengo un pc <b style="color: teal;">${pc1.equipo}</b> grafica <b style="color:salmon;">${pc1.grafica}</b>`;
document.write(frase);
//alert(pc1["ram"]);
