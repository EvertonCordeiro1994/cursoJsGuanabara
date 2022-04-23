alert('Calculadora de gorjeta')
var valorRecebido = prompt('Digite o valor da conta:').replace(',','.')
if( valorRecebido.length <= 0){
 while(valorRecebido.length <= 0){
  alert('Valor inválido')
  var valorRecebido = prompt('Digite o valor da conta:').replace(',','.')
 }
}

var gorjeta = prompt('Digite o percentual de gorjeta:').replace(',','.')
if (gorjeta.length <= 0){
 while(gorjeta.length <= 0){
 alert('Valor inválido')
 var gorjeta = prompt('Digite o percentual de gorjeta:').replace(',','.')
 }
}

var calculo = (valorRecebido/100)*gorjeta


var resposta = calculo.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})



console.log(resposta)

alert(`Valor da gorjeta é ${resposta}`)