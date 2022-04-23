alert("Calculadora de Gorjetas")
var valorInput = prompt("Digite o valor à pagar:").replace(',','.')

if(valorInput.length<= 0){
 while(valorInput.length <= 0){
    alert("Valor inválido")
    var valorInput = prompt("Digite o valor à pagar:").replace(',','.')
 }
}


var gorjetaInput = prompt("Digite a porcentagem que você quer:").replace(',','.')
if(gorjetaInput.length<= 0){
 while(gorjetaInput.length <= 0){
    alert("Valor inválido")
    var gorjetaInput = prompt("Digite a porcentagem que você quer:").replace(',','.')
 }
}




var valor = Number(valorInput)
var gorjeta = Number(gorjetaInput)
var calculo = (valor/100)*gorjeta


var final = String(calculo).replace('.',',').toFixed(2)

alert(`Para ${gorjeta}% de gorjeta, você deve deixar R$${final}.`)