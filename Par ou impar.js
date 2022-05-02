do{
var playerEscolha = prompt("Digite Par ou Impar:").toUpperCase()
if (playerEscolha != "IMPAR" && playerEscolha != "PAR"){
 while (playerEscolha != "IMPAR" && playerEscolha != "PAR"){
  alert("Opção inválida")
  var playerEscolha = prompt("Digite Par ou Impar:").toUpperCase()
 }
}

var playerNumero= prompt("Digite sua jogada de 1 a 10:")
if(playerNumero < 1 || playerNumero > 10){
 while(playerNumero < 1 || playerNumero > 10){
  alert("Valor inválido!")
  var playerNumero= prompt("Digite sua jogada de 1 a 10:")
 }
}

function nA(a,b){
 return Math.floor(Math.random()*(b-a +1))+a
}

var bot =nA(1,10)

var c = Number(playerNumero) + Number(bot)

if (c%2==0){
  var res ="PAR!"
 }else{
  var res ="IMPAR!"
 }

if(playerEscolha+"!" == res){
 var info = "Você ganhou!"

}else{
 var info = "Você perdeu!"
}



alert(`bot:${bot} \nVocê:${playerNumero} \n${c} é ${res} \n${info}`)

var jd = prompt("Quer jogar novamente? \nsim ou  não").toUpperCase()
if (jd != "SIM" && jd != "NÃO"){
 while (jd != "SIM" && jd != "NÃO" && jd != "NAO"){
  alert("Opção inválida")
  var jd = prompt("Quer jogar novamente? \nsim ou  não").toUpperCase()
 }
}
}
while(jd == "SIM")

alert("Tudo bem, até a próxima!")
