//Andrew Joshua Craig Montiel
//busqueda Secuencial
var long=20;
var vec=new Array(long);
for(let i=0;i<long;i++)
    vec[i]=Math.floor(Math.random()*10)+1;
console.log(vec);
var search=5;
var guess=0;
for (let i=0;i<long;i++){
    if(vec[i]==search)
    {
        console.log("El ",search,"esta en la posicion",i);
        search=5;
    }
}
if(!guess){
    console.log("Numero no encontrado");
}