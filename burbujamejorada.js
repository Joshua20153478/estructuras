//Andrew Joshua Craig Montiel
//Metodo de Burbuja Mejorada
var l=10;
var vec=new Array(l);
	for(let i=0;i<l;i++){
        vec[i]=Math.floor(Math.random()*10);
    }
    console.log("~~Vector sin ordenar:~~ ")
    console.log(vec);
    var bool=true;
    do{
        bool=false;
        for(let i=0;i<=l;i++){
            if(vec[i]>vec[i+1]){
                bool=true;
                var j=0;
                j=vec[i];
                vec[i]=vec[i+1];
                vec[i+1]=j;
                console.log("Proceso del ordenamiento: ")
                console.log(vec);
                console.log(" ");
            }
        }
    }while (bool);