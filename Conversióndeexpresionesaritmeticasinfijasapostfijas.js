
//listas de infijas a postfijas
class Stack{
    constructor(){
     this.PilaOperadores = [];
     this.cont=0;
  }
  //Métodos
  push(elemento){
   this.PilaOperadores[this.cont]=elemento;
      this.cont++;
      return this.PilaOperadores;
  }
  pop(){
   this.cont--;
   const elemento = this.PilaOperadores[this.cont];
  delete this.PilaOperadores[this.cont];
   return elemento;
  }
  peek(){
   return this.PilaOperadores[this.cont -1];
  }
  size(){
   return this.cont;
  }
  print(){
   console.log(this.PilaOperadores);
  }
  empty(){
   if (this.cont==0){
      var bool = true;}
  else{
      bool=false;}
    return bool;
  }
}
  class Estructura{
     constructor(){
      this.expresionSufija= new Array();
      this.cont=0;
  }
   agregar(elemento){
     this.expresionSufija[this.cont]=elemento;
     this.cont++;
  }
   mostrar(){
    let a="";
    for(let i=0; i<this.expresionSufija.length; i++){
        a +=  this.expresionSufija[i];
    }
    return a;
   }
}
convertir("(4+(5*6))");
function convertir(expresionInfija){
    const PilaOperadores = new Stack();
    const expresionSufija = new Estructura();
    precedencia = [];
    precedencia ["*"] = 3;
    precedencia ["/"] = 3;
    precedencia ["+"] = 2;
    precedencia ["-"] = 2;
    precedencia ["("] = 1;
    let Operacion = expresionInfija.split("");
    for (let i=0; i<Operacion.length; i++){
        let valor = parseInt(Operacion[i]);
        if(valor >= 0 && valor <= 9){
            expresionSufija.agregar(valor);
        }
        if(Operacion[i] >= 'A'  && Operacion[i] <= 'Z'){
            expresionSufija.agregar(Operacion[i]);
        }
        else if (Operacion[i]=="("|| Operacion[i]=="*" ||Operacion[i]=="/"||Operacion[i]=="+"||Operacion[i]=="-" ||Operacion[i]==")"){

            if(PilaOperadores.empty()==true || Operacion[i]=="("){
                PilaOperadores.push(Operacion[i]);
            }
            else if(precedencia[Operacion[i]]>precedencia[PilaOperadores.peek()]){
                PilaOperadores.push(Operacion[i]);
                }
            else if(precedencia[Operacion[i]]==precedencia[PilaOperadores.peek()]){
                    expresionSufija.agregar(PilaOperadores.pop());
                    PilaOperadores.push(Operacion[i]);
                }
            else if(precedencia[Operacion[i]]<precedencia[PilaOperadores.peek()]){
                    while(precedencia[Operacion[i]]<=precedencia[PilaOperadores.peek()]){
                        expresionSufija.agregar(PilaOperadores.pop());
                    }
                    PilaOperadores.push(Operacion[i]);
                }
            else if(Operacion[i]==")"){
                    let simTope = PilaOperadores.pop();
                    while(simTope != "("){ 
        
                    expresionSufija.agregar(simTope);
                    simTope = PilaOperadores.pop();
                }
             }
          }
        }
        while(!PilaOperadores.empty()){
            expresionSufija.agregar(PilaOperadores.pop());
    }
        return console.log(expresionSufija.mostrar());
        }