var nome = window.prompt("Digite seu nome:")

var idade = window.prompt("Digite sua idade:")

var conferencia = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade"
 
var cont = nome.length >= 7 ? " tem um nome grande." : " tem um nome pequeno."




document.write(`Olá, ${nome}! <br> ${conferencia}, e  ${cont}`)