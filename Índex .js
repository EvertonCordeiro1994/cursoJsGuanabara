do{
function nA(a,b){
 return Math.floor(Math.random()*(b-a +1))+a
}

var sorteio = nA(0,8)

switch(sorteio){
 case 0:
  var pc = "PEDRA"
 break
 case 3:
  var pc = "PEDRA"
 break
 case 6:
  var pc = "PEDRA"
 break
 case 1:
  var pc = "PAPEL"
 break
 case 4:
  var pc = "PAPEL"
 break
 case 7:
  var pc = "PAPEL"
 break
 case 2:
  var pc = "TESOURA"
 break
 case 5:
  var pc = "TESOURA"
 break
 case 8:
  var pc = "TESOURA"
 break
 default:
 break
}


var player = prompt("Pedra, Papel ou Tesoura:").toUpperCase()
if(player.length <= 0){
 while(player.length <= 0){
  alert("Opção inválida")
  var player = prompt("Pedra, Papel ou Tesoura:").toUpperCase()
 }
}

if(player == "PEDRA" && pc == "TESOURA"){
  var res = "Ganhou!"
}

if(player == "PEDRA" && pc == "PAPEL"){
  var res = "perdeu!"
}


if(player == "TESOURA" && pc == "PAPEL"){
  var res = "Ganhou!"
}

if(player == "TESOURA" && pc == "PEDRA"){
  var res = "perdeu!"
}

if(player == "PAPEL" && pc == "PEDRA"){
  var res = "Ganhou!"
}

if(player == "PAPEL" && pc == "TESOURA"){
  var res = "perdeu!"
}


if(pc == player){
 var res ="Empatou!"
}

alert(`Jogada pc: ${pc} \nJogada player: ${player} \nVocê ${res}`)

var d = prompt("Quer jogar novamente?").toUpperCase()
if(d.length <= 0){
 while(d.length <= 0){
  alert("Opção inválida")
  var d = prompt("Quer jogar novamente?").toUpperCase()
 }
}

}
while(d == "SIM")

alert("Tudo bem, até a próxima")






