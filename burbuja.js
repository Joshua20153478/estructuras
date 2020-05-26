//Andrew Joshua Craig Montiel
//Metodo de Burbuja
var l=10;
var vec=new Array(l);
	for(let i=0;i<l;i++){
        vec[i]=Math.floor(Math.random()*10);
}
console.log("~~Vector sin ordenar:~~ ")
console.log(vec);
for(let i=0; i<=l; i++){
    for (let j=0; j<l; j++){
    if (vec[j]>vec[j+1]){
        var temp=0;
        temp=vec[j];
        vec[j]=vec[j+1];
        vec[j+1]=temp;
        console.log("Proceso del ordenamiento: ")
        console.log(vec);
        console.log(" ");
        
        }
    }
}