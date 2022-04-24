var i = prompt("Digite o número onde vamos começar:")
if(i.length <=0){
 while(i.length <=0){
  alert("Valor inválido")
  var i = prompt("Digite o número onde vamos começar:")
 }
}

var f = prompt("Digite o número onde vamos terminar:")
if(f.length <=0){
 while(f.length <=0){
  alert("Valor inválido")
  var f = prompt("Digite o número onde vamos terminar:")
 }
}

var int = prompt("Digite o intervalo entre os números:")
if(int.length <=0){
 while(int.length <=0){
  alert("Valor inválido")
  var int = prompt("Digite o intervalo entre os números:")
 }
}

var inicio = Number(i)
var fim = Number(f)
var intervalo  = Number(int)




console.log("contando...")

if(inicio < fim){
 for(var inicio;inicio<=fim;inicio+=intervalo){
  console.log(inicio)
 } 
} 
else{
 for(var inicio;inicio>=fim;inicio-=intervalo){
  console.log(inicio)
 } 
}



console.log("Fim")