let nombre = prompt("Ingresa tu nombre:");
let dinero = prompt("Ingrese un monto: ");
let vuelto;
vuelto=0;

if(nombre == "Roberto"){
    if( dinero <= 0.6 ){
        document.write("Palito de helado de agua");
        alert("El vuelto es: " + ( dinero - 0.6 ));
    }else if(dinero >= 1 && dinero < 1.6 ){
        document.write("Palito de helado de crema");
        alert("El vuelto es: " + ( dinero - 1 ));
    }else if(dinero >= 1.6 && dinero < 1.7){
        document.write("Bombón helado marca heladix");
        alert("El vuelto es: " + dinero - 1.6);
    }else if(dinero >= 1.7 && dinero < 1.8){
        document.write("Bombón helado marca heladovich");
        alert("Bombón helado marca heladovich");
    }else if(dinero >= 1.8 && dinero < 2.9){
        document.write("Bombón helado marca helardo");
        alert("El vuelto es: " + ( dinero - 1.8 ));
    }else if(dinero = 2.9){
        document.write("Potecito de helado con confites ó Pote de 1/4 KG");
        alert("El vuelto es: " + ( dinero - 2.9 ));
    }
}else if(nombre =="Pedro"){
    if( dinero >= 0.6 && dinero < 1 ){
        document.write("Pedro te puedes comprar un Palito de helado de agua");
        alert("Vuelto es: " + (dinero - 0.6));
    }else if(dinero >= 1 && dinero < 1.6 ){
        document.write("Pedro te puedes comprar un Palito de helado de crema");
        alert("Vuelto es: " + (dinero - 1));
    }else if(dinero >= 1.6 && dinero < 1.7){
        document.write("Pedro te puedes comprar un Bombón helado marca heladix");
        alert("Vuelto es: " + (dinero - 1.6));
    }else if(dinero >= 1.7 && dinero < 1.8){
        document.write("Pedro te puedes comprar un Bombón helado marca heladovich");
        alert("Vuelto es: " + (dinero - 1.7));
    }else if(dinero >= 1.8 && dinero < 2.9){
        document.write("Pedro te puedes comprar un Bombón helado marca helardo");
        alert("Vuelto es: " + (dinero - 1.8));
    }else if(dinero = 2.9){
        document.write("Pedro te puedes comprar un Potecito de helado con confites ó Pote de 1/4 KG");
        alert("Vuelto es: " + (dinero - 2.9));
    }else {
        document.write("No tienes el dinero suficiente");
    }
}else{
    if( dinero <= 0.6 ){
        document.write("Cofla te puedes comprar un Palito de helado de agua");
        alert("El vuelto es: " + ( dinero - 0.6 ));
    }else if(dinero >= 1 && dinero < 1.6 ){
        document.write("Cofla te puedes comprar un Palito de helado de crema");
        alert("El vuelto es:" + ( dinero - 1 ));
    }else if(dinero >= 1.6 && dinero < 1.7){
        document.write("Cofla te puedes comprar un Bombón helado marca heladix");
        alert("El vuelto es:" + ( dinero - 1.6 ));
    }else if(dinero >= 1.7 && dinero < 1.8){
        document.write("Cofla te puedes comprar un Bombón helado marca heladovich");
        alert("El vuelto es:" + ( dinero - 1.7 ));
    }else if(dinero >= 1.8 && dinero < 2.9){
        document.write("Cofla te puedes comprar un Bombón helado marca helardo");
        alert("Vuelto de Cofla: " + (dinero - 1.8));
    }else if(dinero = 2.9){
        document.write("Cofla te puedes comprar un Potecito de helado con confites ó Pote de 1/4 KG ");
        alert("Vuelto de Cofla: " + (dinero - 2.9));
    }
}
