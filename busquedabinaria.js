//Andrew Joshua Craig Montiel
//busqueda Binaria
var longitud=20;
var vectorpar=new Array (longitud);//creamos nuevo vector con longitud marcada
var suma=0;
for(let i=0;i<longitud;i++)
    vectorpar[i]=suma+=2;//se llena el vector con numeros par
console.log(" vector de numeros par: ",vectorpar);//se muestra el vector
busquedaBinaria (vectorpar, 123)

function busquedaBinaria(vec,elemento)
{ 
    var min=0;
    var max=vec.length-1;
    var guess;
    while(min<=max){
        guess=Math.floor((min+max)/2);//se divide el vector en partes iguales
        if(vec[guess]===elemento)//checa si el medio es igual al buscado
            return console.log("numero encontrado ",guess," posicion");
        else if(vec[guess]<elemento)
            min=guess+1;
        else
            max=guess-1;
    }
    return console.log("numero no encontrado")
}