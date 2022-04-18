
var tempoReal = new Date()
var hora = tempoReal.getHours()+":"+tempoReal.getMinutes()

console.log(`Agora são ${hora}`)

if(hora > 5 && hora < 12){
 console.log("Bom dia!")
}

else if (hora >= 12 && hora <18){
 console.log("Boa Tarde!")
}

else {
 console.log("Boa noite!")
}