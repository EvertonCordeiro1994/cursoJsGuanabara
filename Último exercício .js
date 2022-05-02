var lista = []

do{

var  add = Number(prompt("add número entre 1 - 9"))
if(add < 1 || add > 9 || lista.indexOf(add) != -1){
 while(add < 1 || add > 9 || lista.indexOf(add) != -1){
 alert("Valor Inválido")
 var  add = Number(prompt("add número entre 1 - 9"))
 }
}



var num = lista.push(add)
var r = prompt("quer add mais um número?").toUpperCase()
if(r == "NAO"){
 r = "NÃO"
}

}
while(r != "NÃO")

alert(lista)
lista.sort()

var li = Number(lista.length)




let soma = 0;
for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
}

let media = soma/li 


alert(`Ao todo, temos ${lista.length} números cadastrados.\nO maior valor é ${lista[li-1]}\nO menor valor é ${lista[0]}\nSoma dos valores é ${soma}\nE a média a é ${media}`)

console.log(lista)



