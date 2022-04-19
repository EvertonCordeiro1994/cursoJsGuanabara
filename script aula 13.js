var agora = new Date();
var hora =agora.getHours();
var min = agora.getMinutes();
var h = hora + " e " + min
var bc = document.getElementById("backg")


function carregar(){
 var horario = 
document.getElementById("hora").innerHTML= `São ${h}.`
 var img = document.getElementById("imagem")

 if(hora > 5 && hora < 12){
bc.style.background = "yellow";
 img.src="img/manha.jpg"
}

 else if (hora >= 12 && hora <18){
 bc.style.background = "green";
 img.src="img/tarde.jpg"
}

 else {
 bc.style.background = "grey";
 img.src="img/noite.jpg"
}




 
}// fechando a função 
 



