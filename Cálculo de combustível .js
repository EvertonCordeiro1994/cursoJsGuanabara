var valorPago = prompt("Digite o valor que você quer de gasolina:").replace(',','.')
if(valorPago.length <= 0){
 while(valorPago.length <= 0) {
  alert("Valor inválido")
  var valorPago = prompt("Digite o valor que você quer de gasolina:").replace(',','.')
}
}


var gasolina = prompt("Digite o valor do litro:").replace(',','.')
if(gasolina.length <= 0){
 while(gasolina.length <= 0) {
  alert("Valor inválido")
  var gasolina = prompt("Digite o valor do litro:").replace(',','.')
}
}


var calculo = valorPago/gasolina

var v = Number(valorPago).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})

var g = gasolina.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})


if(calculo < 2){
 alert(`Com ${v}, você abastace ${calculo.toFixed(3)} litro de gasolina.`)
}
else{
 alert(`Com ${v}, você abastace ${calculo.toFixed(3)} litros de gasolina.`)
}


var resposta = prompt("Quer saber quanto seu carro vai andar com essa quantia de combustível?").toUpperCase()
if(resposta.length <= 0 ){
 while(resposta.length <= 0) {
  alert("Valor inválido")
  var resposta = prompt("Quer saber quanto seu carro vai andar com essa quantia de combustível?").toUpperCase()
}
}






if(resposta == "SIM"){
 var kpl = prompt("Digite o Km/l do seu carro:").replace(',','.')
 if(kpl.length <= 0 ){
 while(kpl.length <= 0) {
  alert("Valor inválido")
  var kpl = prompt("Digite o Km/l do seu carro:").replace(',','.')
 }
}




var kmCalc = calculo*kpl

 

 alert(`O carro andara ${kmCalc.toFixed(0)} km, com essa quantidade de combustível`)
}
else{
alert("Até a próxima")
} 




console.log(`var g tem o valor ${g} `)
console.log(`var resposta tem o valor ${resposta} `)
console.log(`var calculo tem o valor ${calculo} `)
console.log(`var v tem o valor ${v} `)
console.log(`var valorPago tem o valor ${valorPago} `)
console.log(`var gasolina tem o valor ${gasolina} `)
console.log(`var kmCalc tem o valor ${kmCalc} `)