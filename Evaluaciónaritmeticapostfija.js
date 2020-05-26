//PROGRAMA QUE EVALUA UNA EXPRESION POSTFIJA
class Stack{
    constructor(){
     this.PilaOperadores = [];
  }
  //Métodos
  push(elemento){
   this.PilaOperadores.push(elemento);
   return this.PilaOperadores;
  }
  pop(){
   return this.PilaOperadores.pop();
  }
   peek(){
    return this.PilaOperadores[this.PilaOperadores.length -1];
   }
   size(){
    return this.PilaOperadores.length;
   }
   print(){
    console.log(this.PilaOperadores);
   }
}

console.log(evaluacion("456*+"));//4+5*6

function evaluacion(expresionSufija){
  const PilaOperadores = new Stack();
  var simbolos = expresionSufija.split("");
  for(let i=0; i<simbolos.length; i++){
    let num = parseInt(simbolos[i]);
    if(num >= 0 && num <= 9){
      PilaOperadores.push(num);
    }
    else{
      var op2 = PilaOperadores.pop();
      var op1 = PilaOperadores.pop();
      var res = aritmetica(simbolos[i],op1,op2);
      PilaOperadores.push(res);
    } 
  }
  return PilaOperadores.pop();
}

function aritmetica(operador,op1,op2){
  if(operador == "*"){
    return op1*op2;
  }
  else if(operador == "/"){
    return op1/op2;
  }
  else if(operador == "+"){
    return op1+op2;
  }
  else{
    return op1-op2;
  }
}