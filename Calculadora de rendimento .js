

var valor = prompt("Valor que vai ser Guardado:").replace(',','.')
if(valor.length <= 0){
 while(valor.length <= 0) {
  alert("Valor inválido")
  var valor = prompt("Valor que vai ser Guardado:").replace(',','.')
}
}


var taxa = prompt("Valor da taxa a.a atual:").replace(',','.')
 if(taxa.length <= 0){
 while(taxa.length <= 0) {
  alert("Valor inválido")
  var taxa = prompt("Valor da taxa a.a atual:").replace(',','.')
}
}

//ano
var c1 = (valor/100)*taxa

//mês
var c2 =c1/12

//dia
var c3 =c1/365


var v0 = Number(valor).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})

var v1 = Number(c1).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})

var v2 = Number(c2).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})

var v3 = Number(c3.toFixed(4)).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})

alert(`${v0} vão render:\nEm um ano: ${v1}\nEm um mês: ${v2}\nEm um dia: ${v3}`)



//------------ parte 2 -------------//
var r0 = prompt("Quer saber quanto você precisa guardar para ter um valor em especifico?").toUpperCase()
if(r0.length <= 0){
 while(r0.length <= 0) {
  alert("Valor inválido")
  var r0 = prompt("Quer saber quanto você precisa guardar para ter um valor em especifico?").toUpperCase()
}
}

var r1 = prompt("Digite o valor que você quer receber:").replace(',','.')
if(r1.length <= 0){
 while(r1.length <= 0) {
  alert("Valor inválido")
  var r1 = prompt("Digite o valor que você quer receber:").replace(',','.')
}
}

var r2 = prompt("Você quer receber esse valor por dia, mês ou ano?")
if(r2.length <= 0){
 while(r2.length <= 0) {
  alert("Valor inválido")
  var r2 = prompt("Você quer receber esse valor por dia, mês ou ano?")
}
}



var date = new Date()
var mes = date.getMonth()
var ano = date.getFullYear()

switch (mes){
 case 0:
  var m = "Janeiro"
 break
 
 case 1:
  var m = "Fevereiro"
 break
 
 case 2:
  var m = "Março"
 break
 
 case 3:
  var m = "Abril"
 break
 
 case 4:
  var m = "Maio"
 break
 
 case 5:
  var m = "Junho"
 break

 case 6:
  var m = "Julho"
 break
 
 case 7:
  var m = "Agosto"
 break
 
 case 8:
  var m = "Setembro"
 break

 case 9:
  var m = "Outubro"
 break
 
 case 10:
  var m = "Novembro"
 break

 case 11:
  var m = "Dezembro"
 break
 
 default:
 break
}


var data = m + " de " + ano

//ano
var ca1 =r1*taxa


//mês
var ca2 =(r1*12)*taxa


//dia
var ca3 = ((r1*365)/taxa)*100

var nc0 =Number(ca1).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})

var nc1 =Number(ca2).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})

var nc2 =Number(ca3).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})

var nc3 =Number(r1).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})


if(r0 == "ano"){
alert(`hoje em ${data} com a taxa a.a em ${taxa}% \nPara receber ${nc3} por ${r2}, você precisa ter guardado ${nc0}.`)
}
else if(r0 == "mes"){
alert(`hoje em ${data} com a taxa a.a em ${taxa}% \nPara receber ${nc3} por ${r2}, você precisa ter guardado ${nc1}.`)
}
else{
alert(`hoje em ${data} com a taxa a.a em ${taxa}% \nPara receber ${nc3} por ${r2}, você precisa ter guardado ${nc2}.`)
}



console.log(`variável valor tem o valor ${valor}`)
console.log(`variável taxa tem o valor ${taxa}`)
console.log(`variável c1 tem o valor ${c1}`)
console.log(`variável c2 tem o valor ${c2}`)
console.log(`variável c3 tem o valor ${c3}`)
console.log(`variável v0 tem o valor ${v0}`)
console.log(`variável v1 tem o valor ${v1}`)
console.log(`variável v2 tem o valor ${v2}`)
console.log(`variável v3 tem o valor ${v3}`)
console.log(`variável r0 tem o valor ${r0}`)
console.log(`variável r1 tem o valor ${r1}`)
console.log(`variável r2 tem o valor ${r2}`)
console.log(`variável data tem o valor ${data}`)
console.log(`variável ca1 tem o valor ${ca1}`)
console.log(`variável ca2 tem o valor ${ca2}`)
console.log(`variável ca3 tem o valor ${ca3}`)



