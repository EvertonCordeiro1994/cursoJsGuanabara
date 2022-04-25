let num = [5,2,6,1]

num[4]= 4 // define o local do novo elemento 

num.push(3) // envia o elemento direto para a ultima posição 

//num.sort() deixa os elementos em ordem crescente 



console.log(`elementos:${num}`)
console.log(`são ${num.length} elementos.`)
console.log(`Em ordem crecente eles ficam ${num.sort()}.`)
console.log(`O primeiro elemento é o ${num[0]}`)



for(let c = 0; c<num.length; c++){
console.log(num[c])
}




for(let pos in num){
console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}// exclusivo para arrays


num.indexOf(7)//procura o valor no vetor

let valores = [1,2,3,4,5,6]


var ex1 = valores.indexOf(7)

 if(ex1 == -1){
console.log("não encontrado")
}
else{
 console.log(`O número 7 está na posição ${ex1}`)
}


var ex2 = valores.indexOf(4)

 if(ex2 == -1){
console.log("não encontrado")
}
else{
 console.log(`O número 4 está na posição ${ex2}`)
}
