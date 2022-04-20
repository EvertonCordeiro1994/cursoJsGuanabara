var date = new Date()
var hora = date.getHours()
var minuto = date.getUTCMinutes()
var dia = date.getDay()
var mes = date.getMonth()
var ano = date.getFullYear()


switch (mes){
 case 0:
  var a = "Janeiro"
 break
 
 case 1:
  var a = "Fevereiro"
 break
 
 case 2:
  var a = "Março"
 break
 
 case 3:
  var a = "Abril"
 break
 
 case 4:
  var a = "Maio"
 break
 
 case 5:
  var a = "Junho"
 break

 case 6:
  var a = "Julho"
 break
 
 case 7:
  var a = "Agosto"
 break
 
 case 8:
  var a = "Setembro"
 break

 case 9:
  var a = "Outubro"
 break
 
 case 10:
  var a = "Novembro"
 break

 case 11:
  var a = "Dezembro"
 break
 
 default:
 break
}


var fullHour = hora + ":" + minuto
 

if(Number(hora) >= 13){
 alert(`São ${fullHour} p.m 
Hoje é dia ${dia} de ${a} de ${ano}`)
}
else{
  alert(`São ${fullHour} a.m  
Hoje é dia ${dia} de ${a} de ${ano}`)
}




