var fundo = prompt("Diga uma cor em inglês, para utilizar no fundo da tela:")

var titulo = prompt("Diga uma cor em inglês, para utilizar no titulo:")

var paragrafo =prompt("Diga uma cor em inglês, para utilizar nos parágrafos:")


var f = document.getElementById('corpo')

var t = document.getElementById('titulo')

var p = document.getElementById('paragrafo')



f.style.background= fundo

t.style.color= titulo

p.style.color= paragrafo