var multiplicador = prompt("Digite o número correspondente a tabuada que você quer:")


if(multiplicador.length <= 0 || multiplicador <= 0){
 while (multiplicador.length <= 0|| multiplicador <= 0){
  alert("Valor inválido")
  var multiplicador = prompt("Digite o número correspondente a tabuada que você quer:")

 }
}


var m = 1

console.log(`Esta é a Tabuada do número ${multiplicador}`)

for (var m; m <=10; m++){
console.log(`${multiplicador} x ${m} = ${m*multiplicador}`) 
}

