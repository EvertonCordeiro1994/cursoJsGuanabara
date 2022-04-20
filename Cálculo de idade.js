alert("Vou te ajudar a descobrir a idade.")
var data = new Date()
var anoAtual = data.getFullYear()


var anoNascimento = prompt("Digite o ano de nascimento:")

var n = Number(anoNascimento)

if(n == 0 || anoNascimento > anoAtual){ 
while(anoNascimento <=0 || anoNascimento > anoAtual){
 alert("Ano Inválido")
 var anoNascimento = prompt("Digite o ano de nascimento:")
 var n = Number(anoNascimento)

 }
}

var res = anoAtual - n
alert(`Quem nasceu em ${n}, completa ${res} anos, este ano.`) 